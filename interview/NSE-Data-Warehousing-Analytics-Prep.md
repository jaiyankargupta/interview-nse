# NSE Data Warehousing & Analytics - Interview Preparation Guide

## About the Role

**Position**: Data Warehousing & Analytics  
**Location**: Mumbai  
**Department**: ADM (Application Development & Maintenance)

**Primary Responsibilities:**
- Establishing and managing Data Warehouse solutions
- Designing data architecture
- Developing analytical solutions for internal consumption
- Creating and maintaining database infrastructure
- Collecting and maintaining data
- Ensuring data integrity
- Creating and training data models

---

## Role Requirements Mapped to Your Skills

### 1. Database Infrastructure & Management

**Your Experience:**
- **MongoDB Expertise**: Schema design across all three projects
- **Database Modeling**: User, Portfolio, Message, Room models
- **Query Optimization**: Indexing, aggregation pipelines
- **Data Relationships**: References and embedded documents

**NSE Requirements:**
- SQL databases (PostgreSQL, Oracle)
- NoSQL databases (MongoDB)
- Data warehouse technologies (Snowflake, Redshift)
- ETL tools and pipelines

**Gap Analysis & Learning Path:**
```
Strong Foundation (MongoDB) → Learn SQL/PostgreSQL → Data Warehouse Concepts
                            → ETL Tools (Apache Airflow)
                            → BI Tools (Tableau, Power BI)
```

### 2. Data Collection & Maintenance

**Your Experience:**
- **Portfolio Tracker**: Collected stock data from external API
- **Let's Chat**: Message collection and storage
- **Data Validation**: Input validation, schema enforcement
- **Data Transformation**: Price calculations, aggregations

**Interview Talking Points:**
```
"In my Portfolio Tracker, I implemented data collection from Financial 
Modeling Prep API, validated incoming data, transformed it for storage, 
and aggregated it for analytics. I used batching to optimize API calls 
and caching to reduce redundant requests. For NSE's data warehouse, 
I would apply similar principles at enterprise scale using ETL pipelines, 
data quality checks, and automated collection processes."
```

### 3. Ensuring Data Integrity

**Your Experience:**
- **Schema Validation**: Mongoose schemas with required fields, types
- **Constraints**: Unique constraints, field validation
- **Error Handling**: Comprehensive validation before database operations
- **Transaction Support**: Understanding of ACID properties

**NSE Critical Requirements:**
- Data accuracy for financial reporting
- Regulatory compliance (SEBI)
- Audit trails
- Data lineage tracking

### 4. Analytical Solutions Development

**Your Experience:**
- **Portfolio Analytics**: Profit/loss calculations, performance metrics
- **Data Visualization**: HighCharts, Chart.js implementations
- **Aggregations**: MongoDB aggregation pipelines
- **Real-time Analytics**: Live portfolio value updates

**NSE Use Cases:**
- Trading volume analysis
- Market trends identification
- User behavior analytics
- Risk assessment reports
- Regulatory reporting

### 5. Data Modeling

**Your Experience:**
- **Conceptual Modeling**: Entity relationships (User-Portfolio-Holdings)
- **Logical Modeling**: MongoDB schemas with validation
- **Physical Modeling**: Database indexes, query optimization

**Learn for NSE:**
- Dimensional modeling (Star/Snowflake schema)
- Fact and dimension tables
- Slowly Changing Dimensions (SCD)
- Data normalization/denormalization strategies

---

## Technical Deep Dive: Data Warehousing Concepts

### 1. Data Warehouse vs Database

**Transactional Database (OLTP):**
- Purpose: Day-to-day operations
- Example: NSE trading system
- Characteristics: Fast writes, normalized, current data
- Queries: INSERT, UPDATE, DELETE heavy

**Data Warehouse (OLAP):**
- Purpose: Analytics and reporting
- Example: NSE analytics platform
- Characteristics: Fast reads, denormalized, historical data
- Queries: Complex SELECT with aggregations

**Comparison Table:**
```
Aspect          | OLTP                  | OLAP
----------------|-----------------------|----------------------
Purpose         | Operations            | Analytics
Data            | Current               | Historical
Schema          | Normalized (3NF)      | Denormalized (Star)
Users           | Thousands             | Hundreds
Transactions    | Short, frequent       | Long, complex
Query Type      | Simple                | Complex aggregations
Database Size   | GB to TB              | TB to PB
Response Time   | Milliseconds          | Seconds to minutes
```

### 2. Dimensional Modeling

#### Star Schema

**Structure:**
```
         ┌─────────────┐
         │  dim_time   │
         └─────────────┘
                │
         ┌──────┴──────┐
         │             │
    ┌────▼────┐   ┌────▼────┐
    │dim_user │   │dim_stock│
    └────┬────┘   └────┬────┘
         │             │
         └──────┬──────┘
                │
         ┌──────▼──────┐
         │ fact_trades │ ← Fact Table (Metrics)
         └─────────────┘
                │
         ┌──────┴──────┐
         │             │
    ┌────▼────┐   ┌────▼────┐
    │dim_broker   │dim_sector
    └─────────┘   └─────────┘
```

**Fact Table** (Metrics):
```sql
CREATE TABLE fact_trades (
    trade_id BIGINT PRIMARY KEY,
    -- Foreign Keys to Dimensions
    time_id INT REFERENCES dim_time(time_id),
    user_id INT REFERENCES dim_users(user_id),
    stock_id INT REFERENCES dim_stocks(stock_id),
    broker_id INT REFERENCES dim_broker(broker_id),
    
    -- Measures (Metrics)
    quantity INT,
    price DECIMAL(10, 2),
    trade_value DECIMAL(15, 2),
    commission DECIMAL(8, 2),
    tax DECIMAL(8, 2),
    net_amount DECIMAL(15, 2),
    
    -- Degenerate Dimensions
    trade_type VARCHAR(4), -- BUY/SELL
    order_type VARCHAR(20), -- MARKET/LIMIT
    
    -- Audit
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

**Dimension Tables** (Context):
```sql
-- Time Dimension
CREATE TABLE dim_time (
    time_id INT PRIMARY KEY,
    date DATE,
    day_of_week VARCHAR(10),
    day_of_month INT,
    day_of_year INT,
    week_of_year INT,
    month VARCHAR(10),
    month_number INT,
    quarter INT,
    year INT,
    is_trading_day BOOLEAN,
    is_holiday BOOLEAN,
    is_weekend BOOLEAN,
    fiscal_year INT,
    fiscal_quarter INT
);

-- User Dimension (Type 2 SCD - Track History)
CREATE TABLE dim_users (
    user_key INT PRIMARY KEY, -- Surrogate key
    user_id VARCHAR(50), -- Natural key
    user_name VARCHAR(100),
    email VARCHAR(100),
    mobile VARCHAR(15),
    city VARCHAR(50),
    state VARCHAR(50),
    account_type VARCHAR(20),
    kyc_status VARCHAR(20),
    
    -- SCD Type 2 columns
    effective_date DATE,
    expiry_date DATE,
    is_current BOOLEAN,
    version INT
);

-- Stock Dimension
CREATE TABLE dim_stocks (
    stock_id INT PRIMARY KEY,
    symbol VARCHAR(20),
    company_name VARCHAR(100),
    isin VARCHAR(12),
    sector VARCHAR(50),
    industry VARCHAR(50),
    market_cap BIGINT,
    listing_date DATE,
    face_value DECIMAL(10, 2)
);

-- Broker Dimension
CREATE TABLE dim_broker (
    broker_id INT PRIMARY KEY,
    broker_code VARCHAR(20),
    broker_name VARCHAR(100),
    broker_type VARCHAR(50),
    registration_date DATE,
    city VARCHAR(50)
);
```

#### Snowflake Schema

Normalized dimension tables:
```sql
-- Main Dimension
CREATE TABLE dim_stocks (
    stock_id INT PRIMARY KEY,
    symbol VARCHAR(20),
    company_name VARCHAR(100),
    sector_id INT REFERENCES dim_sector(sector_id),
    industry_id INT REFERENCES dim_industry(industry_id)
);

-- Sub-Dimension (Normalized)
CREATE TABLE dim_sector (
    sector_id INT PRIMARY KEY,
    sector_name VARCHAR(50),
    sector_code VARCHAR(10)
);

CREATE TABLE dim_industry (
    industry_id INT PRIMARY KEY,
    industry_name VARCHAR(50),
    industry_code VARCHAR(10),
    sector_id INT REFERENCES dim_sector(sector_id)
);
```

**Star vs Snowflake:**
- **Star**: Faster queries (fewer joins), more storage
- **Snowflake**: Less storage (normalized), slower queries
- **NSE**: Likely uses Star schema for performance

### 3. Slowly Changing Dimensions (SCD)

**Type 0: Retain Original**
- Never changes
- Example: User's date of birth

**Type 1: Overwrite**
```sql
-- Update user's city
UPDATE dim_users 
SET city = 'Delhi' 
WHERE user_id = 'U123';

-- History lost
```

**Type 2: Add New Row (Most Common)**
```sql
-- User upgrades from BASIC to PREMIUM account

-- Close current record
UPDATE dim_users 
SET expiry_date = CURRENT_DATE, is_current = FALSE 
WHERE user_id = 'U123' AND is_current = TRUE;

-- Add new record
INSERT INTO dim_users (
    user_key, user_id, account_type, 
    effective_date, expiry_date, is_current, version
) VALUES (
    234, 'U123', 'PREMIUM',
    CURRENT_DATE, '9999-12-31', TRUE, 2
);

-- Now we have history:
-- user_key | user_id | account_type | effective_date | expiry_date | is_current
-- 123      | U123    | BASIC       | 2023-01-01     | 2024-01-15  | FALSE
-- 234      | U123    | PREMIUM     | 2024-01-15     | 9999-12-31  | TRUE
```

**Type 3: Add New Column**
```sql
ALTER TABLE dim_users 
ADD COLUMN previous_account_type VARCHAR(20);

UPDATE dim_users 
SET previous_account_type = account_type,
    account_type = 'PREMIUM'
WHERE user_id = 'U123';
```

**Type 4: Mini Dimension**
- Separate rapidly changing attributes
- Example: User's trading volume tier (changes frequently)

---

## ETL Process Design

### Extract-Transform-Load Pipeline

#### 1. Extract Phase

**Data Sources for NSE:**
```javascript
// Trading Database (PostgreSQL)
const tradingData = {
    source: 'PostgreSQL',
    connection: {
        host: 'trading-db.nse.com',
        port: 5432,
        database: 'trading_system'
    },
    tables: [
        'orders',
        'trades',
        'users',
        'accounts'
    ],
    extractionType: 'incremental', // Only changed records
    watermark: 'updated_at' // Track last extraction
};

// Market Data Feed (Real-time)
const marketData = {
    source: 'Kafka',
    topics: [
        'stock_prices',
        'market_depth',
        'indices'
    ],
    extractionType: 'streaming'
};

// External Data (CSV/API)
const externalData = {
    source: 'API',
    endpoint: 'https://api.rbi.org.in/exchange-rates',
    format: 'JSON',
    schedule: 'daily'
};
```

**Incremental Extraction Strategy:**
```sql
-- Extract only new/modified records
SELECT * 
FROM orders 
WHERE updated_at > :last_extraction_time
ORDER BY updated_at;

-- Update watermark
UPDATE etl_metadata 
SET last_extraction_time = CURRENT_TIMESTAMP,
    records_extracted = :count
WHERE source = 'orders';
```

#### 2. Transform Phase

**Data Cleansing:**
```javascript
function cleanseData(rawData) {
    return rawData
        .map(record => ({
            ...record,
            // Remove whitespace
            symbol: record.symbol.trim().toUpperCase(),
            // Standardize nulls
            quantity: record.quantity || 0,
            // Validate ranges
            price: Math.max(0, record.price),
            // Format dates
            trade_date: new Date(record.trade_date).toISOString()
        }))
        // Remove duplicates
        .filter((record, index, self) => 
            index === self.findIndex(r => r.trade_id === record.trade_id)
        )
        // Data quality checks
        .filter(record => 
            record.symbol && 
            record.quantity > 0 && 
            record.price > 0
        );
}
```

**Data Transformation:**
```javascript
function transformTrades(trades) {
    return trades.map(trade => {
        // Lookup dimension keys
        const timeId = getTimeId(trade.trade_date);
        const userId = getUserKey(trade.user_id);
        const stockId = getStockId(trade.symbol);
        
        // Calculate measures
        const tradeValue = trade.quantity * trade.price;
        const commission = calculateCommission(tradeValue);
        const tax = calculateTax(tradeValue);
        const netAmount = tradeValue + commission + tax;
        
        return {
            // Dimension keys
            time_id: timeId,
            user_id: userId,
            stock_id: stockId,
            
            // Measures
            quantity: trade.quantity,
            price: trade.price,
            trade_value: tradeValue,
            commission: commission,
            tax: tax,
            net_amount: netAmount,
            
            // Degenerate dimensions
            trade_type: trade.side,
            order_type: trade.order_type
        };
    });
}
```

**Data Aggregation:**
```javascript
function createDailySummary(trades) {
    const summary = {};
    
    trades.forEach(trade => {
        const key = `${trade.symbol}_${trade.trade_date}`;
        
        if (!summary[key]) {
            summary[key] = {
                symbol: trade.symbol,
                date: trade.trade_date,
                open: trade.price,
                high: trade.price,
                low: trade.price,
                close: trade.price,
                volume: 0,
                value: 0,
                trades_count: 0
            };
        }
        
        summary[key].high = Math.max(summary[key].high, trade.price);
        summary[key].low = Math.min(summary[key].low, trade.price);
        summary[key].close = trade.price; // Last trade price
        summary[key].volume += trade.quantity;
        summary[key].value += trade.trade_value;
        summary[key].trades_count += 1;
    });
    
    return Object.values(summary);
}
```

#### 3. Load Phase

**Bulk Loading:**
```javascript
async function loadFactTable(transformedData, tableName) {
    const batchSize = 10000;
    
    for (let i = 0; i < transformedData.length; i += batchSize) {
        const batch = transformedData.slice(i, i + batchSize);
        
        try {
            // Use COPY for PostgreSQL (fastest method)
            await db.query(`
                COPY ${tableName} (
                    time_id, user_id, stock_id, broker_id,
                    quantity, price, trade_value, commission, tax, net_amount,
                    trade_type, order_type
                )
                FROM STDIN WITH (FORMAT CSV)
            `, {
                data: convertToCSV(batch)
            });
            
            console.log(`Loaded batch ${i / batchSize + 1}: ${batch.length} records`);
        } catch (error) {
            // Log error and continue
            await logETLError({
                stage: 'LOAD',
                table: tableName,
                batch: i / batchSize,
                error: error.message,
                records: batch
            });
        }
    }
}
```

**Error Handling:**
```javascript
class ETLPipeline {
    async execute() {
        const startTime = Date.now();
        const metadata = {
            pipeline: 'daily_trades_etl',
            start_time: new Date(),
            status: 'RUNNING'
        };
        
        try {
            // Extract
            console.log('Starting extraction...');
            const rawData = await this.extract();
            metadata.records_extracted = rawData.length;
            
            // Transform
            console.log('Starting transformation...');
            const transformedData = await this.transform(rawData);
            metadata.records_transformed = transformedData.length;
            
            // Validate
            const validationErrors = await this.validate(transformedData);
            if (validationErrors.length > 0) {
                throw new Error(`Validation failed: ${validationErrors.length} errors`);
            }
            
            // Load
            console.log('Starting load...');
            await this.load(transformedData);
            metadata.records_loaded = transformedData.length;
            
            // Success
            metadata.status = 'SUCCESS';
            metadata.end_time = new Date();
            metadata.duration_ms = Date.now() - startTime;
            
        } catch (error) {
            metadata.status = 'FAILED';
            metadata.error_message = error.message;
            metadata.end_time = new Date();
            
            // Alert on failure
            await this.alertOps({
                severity: 'CRITICAL',
                message: `ETL pipeline failed: ${error.message}`,
                metadata
            });
            
            throw error;
        } finally {
            // Log metadata
            await this.logMetadata(metadata);
        }
    }
}
```

---

## SQL for Analytics

### 1. Complex Aggregations

**Trading Volume Analysis:**
```sql
-- Top 10 stocks by trading volume
SELECT 
    s.symbol,
    s.company_name,
    SUM(f.quantity) as total_volume,
    SUM(f.trade_value) as total_value,
    COUNT(DISTINCT f.user_id) as unique_traders,
    AVG(f.price) as avg_price
FROM fact_trades f
JOIN dim_stocks s ON f.stock_id = s.stock_id
JOIN dim_time t ON f.time_id = t.time_id
WHERE t.year = 2024 AND t.month = 'January'
GROUP BY s.symbol, s.company_name
ORDER BY total_volume DESC
LIMIT 10;
```

**User Segmentation:**
```sql
-- Segment users by trading frequency
SELECT 
    CASE 
        WHEN trade_count >= 100 THEN 'Very Active'
        WHEN trade_count >= 50 THEN 'Active'
        WHEN trade_count >= 10 THEN 'Moderate'
        ELSE 'Occasional'
    END as user_segment,
    COUNT(*) as user_count,
    AVG(total_value) as avg_trading_value,
    SUM(total_value) as segment_value
FROM (
    SELECT 
        u.user_id,
        u.user_name,
        COUNT(f.trade_id) as trade_count,
        SUM(f.trade_value) as total_value
    FROM dim_users u
    LEFT JOIN fact_trades f ON u.user_key = f.user_id
    JOIN dim_time t ON f.time_id = t.time_id
    WHERE t.year = 2024 AND u.is_current = TRUE
    GROUP BY u.user_id, u.user_name
) user_stats
GROUP BY user_segment
ORDER BY 
    CASE user_segment
        WHEN 'Very Active' THEN 1
        WHEN 'Active' THEN 2
        WHEN 'Moderate' THEN 3
        ELSE 4
    END;
```

### 2. Window Functions

**Running Totals:**
```sql
-- Cumulative trading volume per stock
SELECT 
    t.date,
    s.symbol,
    SUM(f.quantity) as daily_volume,
    SUM(SUM(f.quantity)) OVER (
        PARTITION BY s.symbol 
        ORDER BY t.date
    ) as cumulative_volume
FROM fact_trades f
JOIN dim_stocks s ON f.stock_id = s.stock_id
JOIN dim_time t ON f.time_id = t.time_id
WHERE t.year = 2024
GROUP BY t.date, s.symbol
ORDER BY s.symbol, t.date;
```

**Ranking:**
```sql
-- Top 3 traders per stock
SELECT *
FROM (
    SELECT 
        s.symbol,
        u.user_name,
        SUM(f.trade_value) as total_value,
        RANK() OVER (
            PARTITION BY s.symbol 
            ORDER BY SUM(f.trade_value) DESC
        ) as rank
    FROM fact_trades f
    JOIN dim_stocks s ON f.stock_id = s.stock_id
    JOIN dim_users u ON f.user_id = u.user_key AND u.is_current = TRUE
    WHERE f.trade_type = 'BUY'
    GROUP BY s.symbol, u.user_name
) ranked
WHERE rank <= 3
ORDER BY symbol, rank;
```

**Moving Averages:**
```sql
-- 7-day moving average of trading volume
SELECT 
    t.date,
    s.symbol,
    SUM(f.quantity) as daily_volume,
    AVG(SUM(f.quantity)) OVER (
        PARTITION BY s.symbol 
        ORDER BY t.date 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) as moving_avg_7day
FROM fact_trades f
JOIN dim_stocks s ON f.stock_id = s.stock_id
JOIN dim_time t ON f.time_id = t.time_id
GROUP BY t.date, s.symbol
ORDER BY s.symbol, t.date;
```

### 3. Pivot Tables

**Month-wise Trading Volume:**
```sql
SELECT 
    s.symbol,
    SUM(CASE WHEN t.month = 'January' THEN f.quantity ELSE 0 END) as Jan,
    SUM(CASE WHEN t.month = 'February' THEN f.quantity ELSE 0 END) as Feb,
    SUM(CASE WHEN t.month = 'March' THEN f.quantity ELSE 0 END) as Mar,
    SUM(CASE WHEN t.month = 'April' THEN f.quantity ELSE 0 END) as Apr,
    SUM(f.quantity) as Total
FROM fact_trades f
JOIN dim_stocks s ON f.stock_id = s.stock_id
JOIN dim_time t ON f.time_id = t.time_id
WHERE t.year = 2024
GROUP BY s.symbol
ORDER BY Total DESC
LIMIT 20;
```

### 4. CTEs (Common Table Expressions)

**Cohort Analysis:**
```sql
WITH user_first_trade AS (
    SELECT 
        u.user_id,
        MIN(t.date) as first_trade_date,
        DATE_TRUNC('month', MIN(t.date)) as cohort_month
    FROM fact_trades f
    JOIN dim_users u ON f.user_id = u.user_key
    JOIN dim_time t ON f.time_id = t.time_id
    GROUP BY u.user_id
),
monthly_activity AS (
    SELECT 
        uft.cohort_month,
        DATE_TRUNC('month', t.date) as activity_month,
        COUNT(DISTINCT u.user_id) as active_users
    FROM user_first_trade uft
    JOIN dim_users u ON uft.user_id = u.user_id
    JOIN fact_trades f ON u.user_key = f.user_id
    JOIN dim_time t ON f.time_id = t.time_id
    GROUP BY uft.cohort_month, DATE_TRUNC('month', t.date)
)
SELECT 
    cohort_month,
    activity_month,
    active_users,
    EXTRACT(MONTH FROM AGE(activity_month, cohort_month)) as months_since_first
FROM monthly_activity
ORDER BY cohort_month, activity_month;
```

---

## Interview Questions & Answers

### Section 1: Data Warehousing Concepts (15 Questions)

**Q1: Explain the difference between OLTP and OLAP systems.**

**A:** OLTP (Online Transaction Processing) systems handle day-to-day operational transactions like order placement in NSE's trading system. They require fast writes, high concurrency, and normalized schemas. Queries are simple (INSERT, UPDATE, SELECT by ID).

OLAP (Online Analytical Processing) systems handle complex analytical queries for reporting and business intelligence. They're optimized for read-heavy workloads with denormalized schemas (star/snowflake). Example: NSE's analytics platform analyzing trading patterns.

**Key Differences:**
- OLTP: Current data, many concurrent users, sub-second response
- OLAP: Historical data, fewer users, seconds to minutes response
- OLTP: INSERT/UPDATE heavy, OLAP: SELECT heavy with aggregations
- OLTP: Hundreds of tables, OLAP: Dozens of tables with millions of rows

**NSE Example:** Trading database (OLTP) stores every order. Data warehouse (OLAP) analyzes trading trends, market patterns, and generates regulatory reports.

---

**Q2: What is a star schema? How is it different from snowflake schema?**

**A:** Star schema is a dimensional modeling approach where a central fact table connects to dimension tables directly, forming a star pattern.

**Star Schema:**
```
Fact_Trades (center)
    ↓ connects to
Dim_Time, Dim_User, Dim_Stock, Dim_Broker (points of star)
```

**Benefits:**
- Simpler queries (fewer joins)
- Better query performance
- Easier for business users to understand

**Snowflake Schema:**
Dimension tables are further normalized into sub-dimensions.

```
Fact_Trades 
    → Dim_Stock 
        → Dim_Sector 
            → Dim_Industry
```

**Trade-offs:**
- Snowflake: Saves storage (no redundancy), slower queries (more joins)
- Star: Uses more storage, faster queries
- NSE likely uses star schema for performance in analytics

**My Experience:** In Portfolio Tracker, I used embedded documents (similar to denormalization in star schema) for faster queries. Would apply same principle in data warehouse design.

---

**Q3: What are Slowly Changing Dimensions? Explain with examples.**

**A:** SCDs handle how dimension attributes change over time.

**Type 0 - Retain Original:**
Never changes. Example: User's date of birth.

**Type 1 - Overwrite:**
Update in place, history lost.
```sql
UPDATE dim_users SET city = 'Mumbai' WHERE user_id = 'U123';
```
Use when: History not important (e.g., fixing typos)

**Type 2 - Add New Row (Most Common):**
Keep full history with effective dates.
```sql
-- Old row
user_key=123, user_id=U123, account_type=BASIC, 
effective_date=2023-01-01, expiry_date=2024-01-15, is_current=FALSE

-- New row
user_key=234, user_id=U123, account_type=PREMIUM, 
effective_date=2024-01-15, expiry_date=9999-12-31, is_current=TRUE
```
Use when: History matters for analysis (account upgrades, address changes)

**Type 3 - Add Column:**
```sql
ALTER TABLE dim_users ADD previous_account_type VARCHAR(20);
```
Use when: Only need previous value, not full history

**NSE Example:** User account type changes (BASIC → PREMIUM) should be Type 2 SCD because historical trades need to be analyzed with the account type active at that time.

---

**Q4: Explain the ETL process you would design for NSE.**

**A:** ETL (Extract-Transform-Load) pipeline for daily trade data:

**1. Extract:**
- **Source:** Trading database (PostgreSQL)
- **Method:** Incremental extraction using watermark
```sql
SELECT * FROM trades 
WHERE updated_at > :last_extraction_time
```
- **Frequency:** End of trading day (4:00 PM)
- **Tools:** Apache Airflow for orchestration

**2. Transform:**
- **Cleansing:** Remove duplicates, handle nulls, validate data
- **Enrichment:** Add dimension keys, calculate metrics
```javascript
tradeValue = quantity * price
commission = calculateCommission(tradeValue)
netAmount = tradeValue + commission + tax
```
- **Aggregation:** Create daily summaries (OHLC - Open, High, Low, Close)
- **Validation:** Data quality checks

**3. Load:**
- **Target:** Data warehouse (Snowflake/Redshift)
- **Method:** Bulk loading with COPY command
- **Batch Size:** 10,000 records per batch
- **Error Handling:** Log failed records, retry logic

**4. Orchestration:**
```python
# Airflow DAG
dag = DAG('daily_trades_etl', schedule_interval='0 17 * * 1-5')

extract_task = PythonOperator(task_id='extract', python_callable=extract)
transform_task = PythonOperator(task_id='transform', python_callable=transform)
validate_task = PythonOperator(task_id='validate', python_callable=validate)
load_task = PythonOperator(task_id='load', python_callable=load)

extract_task >> transform_task >> validate_task >> load_task
```

**Monitoring:**
- Track records extracted/transformed/loaded
- Alert on failures
- Data quality metrics

---

**Q5: How would you optimize a slow-running analytical query?**

**A:** Systematic optimization approach:

**1. Analyze Execution Plan:**
```sql
EXPLAIN ANALYZE
SELECT s.symbol, SUM(f.trade_value)
FROM fact_trades f
JOIN dim_stocks s ON f.stock_id = s.stock_id
GROUP BY s.symbol;
```
Look for: Sequential scans, missing indexes, expensive joins

**2. Add Indexes:**
```sql
-- Index on foreign keys
CREATE INDEX idx_fact_trades_stock_id ON fact_trades(stock_id);
CREATE INDEX idx_fact_trades_time_id ON fact_trades(time_id);

-- Composite index for common filters
CREATE INDEX idx_fact_trades_date_symbol 
ON fact_trades(time_id, stock_id) 
INCLUDE (trade_value, quantity);
```

**3. Partition Large Tables:**
```sql
-- Partition fact table by year
CREATE TABLE fact_trades_2024 PARTITION OF fact_trades
FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
```

**4. Use Materialized Views:**
```sql
-- Pre-aggregate daily summaries
CREATE MATERIALIZED VIEW mv_daily_stock_summary AS
SELECT 
    time_id,
    stock_id,
    SUM(quantity) as total_volume,
    SUM(trade_value) as total_value,
    COUNT(*) as trade_count
FROM fact_trades
GROUP BY time_id, stock_id;

-- Refresh incrementally
REFRESH MATERIALIZED VIEW CONCURRENTLY mv_daily_stock_summary;
```

**5. Query Rewrite:**
```sql
-- Before (slow - scans all data)
SELECT * FROM fact_trades 
WHERE EXTRACT(YEAR FROM trade_date) = 2024;

-- After (fast - uses partition)
SELECT * FROM fact_trades 
WHERE trade_date >= '2024-01-01' AND trade_date < '2025-01-01';
```

**6. Optimize Joins:**
- Join smaller tables first
- Use EXISTS instead of IN for large datasets
- Consider denormalization for frequently joined data

**My Experience:** Optimized MongoDB queries in projects using indexes, projection, and lean(). Would apply similar principles plus partitioning and materialized views for data warehouse scale.

---

**Q6: What is data lineage and why is it important?**

**A:** Data lineage tracks the complete journey of data from source to destination, including all transformations.

**Components:**
1. **Source Systems:** Where data originates (trading DB, market feeds)
2. **ETL Steps:** Transformations applied
3. **Destination:** Data warehouse tables
4. **Dependencies:** Which downstream reports use this data

**Example Lineage:**
```
Trading DB (orders table)
    ↓ Extract (SQL query)
    ↓ Transform (add dimensions, calculate metrics)
    ↓ Load (fact_trades table)
    ↓ Used by (Daily Trading Report, User Analytics Dashboard)
```

**Importance:**
1. **Impact Analysis:** If source changes, know what breaks
2. **Debugging:** Trace data quality issues to root cause
3. **Compliance:** Regulatory requirements (SEBI audit trails)
4. **Documentation:** Understand data flow for new team members
5. **Data Quality:** Track where data quality issues originate

**Implementation:**
```javascript
const dataLineage = {
    table: 'fact_trades',
    sources: [
        {
            system: 'trading_db',
            table: 'orders',
            columns: ['order_id', 'user_id', 'symbol', 'quantity', 'price'],
            extraction_time: '2024-01-15 17:00:00'
        }
    ],
    transformations: [
        {
            step: 'lookup_dimensions',
            operation: 'JOIN with dim_time, dim_user, dim_stock'
        },
        {
            step: 'calculate_metrics',
            operation: 'trade_value = quantity * price'
        }
    ],
    destination: 'warehouse.fact_trades',
    downstream_consumers: [
        'Daily Trading Report',
        'User Analytics Dashboard',
        'Regulatory Filing'
    ]
};
```

**Tools:** Apache Atlas, AWS Glue Data Catalog, Informatica

---

**Q7: How do you ensure data quality in a data warehouse?**

**A:** Multi-layer data quality strategy:

**1. Source Data Validation:**
```javascript
function validateSourceData(records) {
    const errors = [];
    
    records.forEach((record, index) => {
        // Completeness checks
        if (!record.trade_id) {
            errors.push({ row: index, field: 'trade_id', error: 'Missing required field' });
        }
        
        // Accuracy checks
        if (record.quantity <= 0) {
            errors.push({ row: index, field: 'quantity', error: 'Invalid value' });
        }
        
        // Consistency checks
        if (record.trade_value !== record.quantity * record.price) {
            errors.push({ row: index, error: 'Inconsistent calculation' });
        }
        
        // Format checks
        if (!/^[A-Z0-9]+$/.test(record.symbol)) {
            errors.push({ row: index, field: 'symbol', error: 'Invalid format' });
        }
    });
    
    return {
        valid: errors.length === 0,
        errors,
        errorRate: errors.length / records.length
    };
}
```

**2. Schema Validation:**
```sql
-- Add constraints
ALTER TABLE fact_trades 
ADD CONSTRAINT chk_positive_quantity CHECK (quantity > 0);

ALTER TABLE fact_trades 
ADD CONSTRAINT chk_positive_price CHECK (price > 0);

ALTER TABLE fact_trades 
ADD CONSTRAINT chk_valid_trade_type CHECK (trade_type IN ('BUY', 'SELL'));
```

**3. Reconciliation:**
```sql
-- Compare source vs warehouse counts
SELECT 
    COUNT(*) as source_count
FROM trading_db.orders 
WHERE trade_date = CURRENT_DATE;

SELECT 
    COUNT(*) as warehouse_count
FROM fact_trades f
JOIN dim_time t ON f.time_id = t.time_id
WHERE t.date = CURRENT_DATE;

-- Alert if counts don't match
```

**4. Data Profiling:**
```sql
-- Statistical analysis
SELECT 
    COUNT(*) as total_records,
    COUNT(DISTINCT user_id) as unique_users,
    MIN(trade_value) as min_value,
    MAX(trade_value) as max_value,
    AVG(trade_value) as avg_value,
    STDDEV(trade_value) as std_dev,
    COUNT(*) FILTER (WHERE trade_value IS NULL) as null_count
FROM fact_trades;
```

**5. Anomaly Detection:**
```javascript
// Detect unusual patterns
async function detectAnomalies() {
    // Compare to historical baselines
    const todayVolume = await getTradingVolume(today);
    const avgVolume = await getAvgVolume(last30Days);
    
    if (todayVolume < avgVolume * 0.5 || todayVolume > avgVolume * 2) {
        await alert({
            type: 'VOLUME_ANOMALY',
            message: `Today's volume ${todayVolume} deviates significantly from average ${avgVolume}`
        });
    }
}
```

**6. Data Quality Metrics Dashboard:**
- Completeness: % of non-null values
- Accuracy: % of values passing validation
- Consistency: % of records matching business rules
- Timeliness: Data freshness (lag from source)
- Uniqueness: % of duplicate records

---

**Q8: Explain partitioning strategies for large fact tables.**

**A:** Partitioning splits large tables into smaller, manageable pieces.

**1. Range Partitioning (Most Common for Time-Series):**
```sql
-- Partition by year and month
CREATE TABLE fact_trades (
    trade_id BIGINT,
    trade_date DATE,
    -- other columns
) PARTITION BY RANGE (trade_date);

CREATE TABLE fact_trades_2024_01 PARTITION OF fact_trades
FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

CREATE TABLE fact_trades_2024_02 PARTITION OF fact_trades
FOR VALUES FROM ('2024-02-01') TO ('2024-03-01');
```

**Benefits:**
- Queries with date filters scan only relevant partitions
- Easy to archive old partitions
- Maintenance operations (VACUUM, INDEX) faster

**2. List Partitioning (By Category):**
```sql
-- Partition by stock exchange
CREATE TABLE fact_trades (
    ...
) PARTITION BY LIST (exchange);

CREATE TABLE fact_trades_nse PARTITION OF fact_trades
FOR VALUES IN ('NSE');

CREATE TABLE fact_trades_bse PARTITION OF fact_trades
FOR VALUES IN ('BSE');
```

**3. Hash Partitioning (Even Distribution):**
```sql
-- Partition by hash of user_id
CREATE TABLE fact_trades (
    ...
) PARTITION BY HASH (user_id);

CREATE TABLE fact_trades_p1 PARTITION OF fact_trades
FOR VALUES WITH (MODULUS 4, REMAINDER 0);

CREATE TABLE fact_trades_p2 PARTITION OF fact_trades
FOR VALUES WITH (MODULUS 4, REMAINDER 1);
-- etc.
```

**Query Optimization:**
```sql
-- Before partitioning (scans 100M rows)
SELECT * FROM fact_trades 
WHERE trade_date >= '2024-01-01' AND trade_date < '2024-02-01';

-- After partitioning (scans only 5M rows in 2024_01 partition)
-- Same query, but PostgreSQL automatically uses partition pruning
```

**Partition Management:**
```sql
-- Create next month's partition (automated script)
CREATE TABLE fact_trades_2024_03 PARTITION OF fact_trades
FOR VALUES FROM ('2024-03-01') TO ('2024-04-01');

-- Archive old partitions
ALTER TABLE fact_trades DETACH PARTITION fact_trades_2023_01;
-- Move to archive storage
```

**NSE Scale:** With millions of trades daily, monthly partitions keep each partition at manageable size (~100M rows).

---

**Q9: What is a fact table vs dimension table?**

**A:** 

**Fact Table:**
- Stores measurable **events** or **transactions**
- Contains **metrics** (numerical values)
- Large, grows continuously
- Foreign keys to dimension tables
- Example: fact_trades

```sql
CREATE TABLE fact_trades (
    trade_id BIGINT PRIMARY KEY,
    
    -- Foreign keys (who, what, when, where)
    time_id INT,
    user_id INT,
    stock_id INT,
    broker_id INT,
    
    -- Metrics (measures)
    quantity INT,
    price DECIMAL(10, 2),
    trade_value DECIMAL(15, 2),
    commission DECIMAL(8, 2),
    
    -- Degenerate dimensions
    trade_type VARCHAR(4)
);
```

**Dimension Table:**
- Stores **context** or **descriptive attributes**
- Contains **textual information**
- Small, relatively static
- Provides meaning to fact table metrics
- Example: dim_stocks

```sql
CREATE TABLE dim_stocks (
    stock_id INT PRIMARY KEY,
    
    -- Attributes (context)
    symbol VARCHAR(20),
    company_name VARCHAR(100),
    sector VARCHAR(50),
    industry VARCHAR(50),
    market_cap BIGINT,
    listing_date DATE
);
```

**Relationship:**
```sql
-- Fact table answers: HOW MUCH?
SELECT SUM(trade_value) FROM fact_trades; -- 1.5 billion rupees

-- Dimension table answers: WHO, WHAT, WHEN, WHERE?
SELECT symbol, company_name FROM dim_stocks WHERE stock_id = 123;
-- RELIANCE, Reliance Industries Limited

-- Together answer: HOW MUCH of WHAT?
SELECT 
    s.symbol,
    SUM(f.trade_value) as total_value
FROM fact_trades f
JOIN dim_stocks s ON f.stock_id = s.stock_id
GROUP BY s.symbol;
-- RELIANCE: 500M, TCS: 300M, INFY: 200M
```

**Characteristics Comparison:**
```
Aspect          | Fact Table          | Dimension Table
----------------|---------------------|------------------
Purpose         | Metrics, events     | Context, attributes
Size            | Large (millions)    | Small (thousands)
Growth          | Fast, continuous    | Slow, periodic
Data Type       | Mostly numeric      | Mostly text
Queries         | Aggregations        | Lookups, filters
Width           | Narrow (10-20 cols) | Wide (20-50 cols)
```

---

**Q10: How do you handle late-arriving data in a data warehouse?**

**A:** Late-arriving data is data that arrives after the ETL process has run.

**Scenario:** Trade executed on Jan 15, but data arrives on Jan 17 (system outage, network delay).

**Strategies:**

**1. Upsert (Update or Insert):**
```sql
-- PostgreSQL
INSERT INTO fact_trades (
    trade_id, time_id, user_id, stock_id, quantity, price, trade_value
) VALUES (
    12345, 20240115, 101, 501, 100, 2500, 250000
)
ON CONFLICT (trade_id) DO UPDATE SET
    quantity = EXCLUDED.quantity,
    price = EXCLUDED.price,
    trade_value = EXCLUDED.trade_value,
    updated_at = CURRENT_TIMESTAMP;
```

**2. Separate Late Arrivals Table:**
```sql
CREATE TABLE fact_trades_late_arrivals (
    LIKE fact_trades,
    original_date DATE,
    arrival_date DATE,
    processed BOOLEAN DEFAULT FALSE
);

-- Periodic merge process
INSERT INTO fact_trades
SELECT trade_id, time_id, user_id, stock_id, quantity, price, trade_value
FROM fact_trades_late_arrivals
WHERE processed = FALSE;

UPDATE fact_trades_late_arrivals SET processed = TRUE;
```

**3. Temporal Validity:**
```sql
ALTER TABLE fact_trades ADD COLUMN as_of_date DATE;

-- Record reflects state as of this date
INSERT INTO fact_trades (..., as_of_date)
VALUES (..., '2024-01-15'); -- Trade date, even though loaded on Jan 17
```

**4. Regenerate Aggregates:**
```javascript
async function handleLateArrival(trade) {
    // Insert late trade
    await insertTrade(trade);
    
    // Regenerate affected aggregates
    const affectedDate = trade.trade_date;
    await regenerateDailySummary(affectedDate);
    
    // Invalidate cached reports
    await invalidateCache(`daily_report_${affectedDate}`);
    
    // Notify data consumers
    await notifyConsumers({
        message: 'Data updated for ' + affectedDate,
        reason: 'Late arrival',
        affectedReports: ['Daily Trading Report']
    });
}
```

**5. Version Control:**
```sql
ALTER TABLE fact_trades ADD COLUMN data_version INT DEFAULT 1;

-- Late arrival updates version
UPDATE fact_trades 
SET quantity = new_quantity,
    data_version = data_version + 1,
    updated_at = CURRENT_TIMESTAMP
WHERE trade_id = 12345;

-- Audit trail
INSERT INTO data_changes_log (
    table_name, record_id, change_type, changed_at, reason
) VALUES (
    'fact_trades', 12345, 'LATE_ARRIVAL', CURRENT_TIMESTAMP, 
    'Trade data arrived 2 days late'
);
```

**Prevention:**
- Real-time/near-real-time ETL
- Monitoring for missing data
- Source system improvements

---

(Continuing with remaining questions...)

**Q11: Explain data mart vs data warehouse.**

**A:** 

**Data Warehouse:**
- **Scope:** Enterprise-wide
- **Purpose:** Central repository for all organizational data
- **Users:** Entire organization
- **Size:** Very large (TB to PB)
- **Example:** NSE's complete data warehouse with all trading, market, user, settlement data

**Data Mart:**
- **Scope:** Department/subject-specific
- **Purpose:** Subset of warehouse for specific business area
- **Users:** Specific department/team
- **Size:** Smaller (GB to TB)
- **Example:** Risk Management data mart (only risk-related data)

**Types of Data Marts:**

1. **Dependent Data Mart:**
```
Data Warehouse (source) → Data Mart (subset)
```
Created from existing warehouse

2. **Independent Data Mart:**
```
Source Systems → Data Mart (direct)
```
Built directly from sources (not recommended)

**NSE Example:**
```
Central Data Warehouse
    ├── Trading Data Mart (Order Management team)
    ├── Risk Data Mart (Risk Management team)
    ├── Compliance Data Mart (Regulatory team)
    └── Analytics Data Mart (Business Intelligence team)
```

**Benefits of Data Marts:**
- Faster queries (smaller dataset)
- Customized to department needs
- Better performance
- Easier to maintain
- Department-specific security

---

**Q12: What are the different types of fact tables?**

**A:**

**1. Transaction Fact Table:**
- One row per transaction/event
- Most granular level
- Example: Every trade executed

```sql
CREATE TABLE fact_trades (
    trade_id BIGINT PRIMARY KEY,
    time_id INT,
    user_id INT,
    stock_id INT,
    quantity INT,
    price DECIMAL(10, 2),
    trade_value DECIMAL(15, 2)
);
-- 10 million rows per day
```

**2. Periodic Snapshot Fact Table:**
- Captures state at regular intervals
- Example: End-of-day portfolio positions

```sql
CREATE TABLE fact_daily_positions (
    date_id INT,
    user_id INT,
    stock_id INT,
    quantity INT,
    market_value DECIMAL(15, 2),
    unrealized_pnl DECIMAL(15, 2),
    PRIMARY KEY (date_id, user_id, stock_id)
);
-- One row per user per stock per day
```

**3. Accumulating Snapshot Fact Table:**
- Tracks process lifecycle
- Example: Order fulfillment pipeline

```sql
CREATE TABLE fact_order_lifecycle (
    order_id BIGINT PRIMARY KEY,
    
    -- Milestone dates
    order_placed_date_id INT,
    order_validated_date_id INT,
    order_matched_date_id INT,
    order_settled_date_id INT,
    
    -- Metrics at each stage
    quantity INT,
    filled_quantity INT,
    average_price DECIMAL(10, 2),
    
    -- Current status
    current_status VARCHAR(20),
    
    -- Duration metrics
    validation_duration_sec INT,
    matching_duration_sec INT
);
```

**4. Factless Fact Table:**
- Records events without measures
- Example: User login events

```sql
CREATE TABLE fact_user_logins (
    login_id BIGINT PRIMARY KEY,
    time_id INT,
    user_id INT,
    session_id VARCHAR(50),
    ip_address VARCHAR(15)
    -- No numeric measures, just event tracking
);
```

**Use Case Mapping:**
- Transaction: Real-time analytics, audit trails
- Periodic Snapshot: Trend analysis, historical comparison
- Accumulating Snapshot: Process monitoring, SLA tracking
- Factless: Event tracking, coverage analysis

---

**Q13: How would you design a reporting solution for NSE?**

**A:** Multi-layer reporting architecture:

**1. Data Layer:**
```
Raw Data (Trading DB)
    ↓ ETL
Data Warehouse (fact/dimension tables)
    ↓ Aggregation
OLAP Cubes / Materialized Views
```

**2. Reporting Types:**

**Operational Reports (Daily):**
- Trading volume by stock
- Top traders
- Failed trades
- System performance metrics

```sql
-- Pre-built query
CREATE VIEW report_daily_trading_summary AS
SELECT 
    t.date,
    s.symbol,
    SUM(f.quantity) as total_volume,
    SUM(f.trade_value) as total_value,
    COUNT(*) as trade_count,
    AVG(f.price) as avg_price
FROM fact_trades f
JOIN dim_stocks s ON f.stock_id = s.stock_id
JOIN dim_time t ON f.time_id = t.time_id
GROUP BY t.date, s.symbol;
```

**Analytical Reports (Weekly/Monthly):**
- Market trends
- User segmentation
- Sector performance
- Comparative analysis

**Regulatory Reports (Monthly/Quarterly):**
- SEBI compliance reports
- Transaction summaries
- Audit trails
- Market manipulation detection

**3. Delivery Mechanisms:**

**Automated Reports:**
```javascript
// Daily report generation
schedule.daily('17:30', async () => {
    const report = await generateDailyTradingReport();
    
    // Multiple formats
    const pdf = await convertToPDF(report);
    const excel = await convertToExcel(report);
    
    // Distribution
    await emailReport(recipients, pdf);
    await uploadToSharePoint(excel);
    await publishToDashboard(report);
});
```

**Interactive Dashboards:**
- Tableau/Power BI dashboards
- Real-time metrics
- Drill-down capabilities
- Custom filters

**Ad-hoc Queries:**
- SQL query interface for analysts
- Saved query templates
- Query validation to prevent expensive operations

**4. Performance Optimization:**

```sql
-- Materialized views for common reports
CREATE MATERIALIZED VIEW mv_monthly_summary AS
SELECT 
    t.year,
    t.month,
    s.sector,
    SUM(f.trade_value) as total_value,
    COUNT(DISTINCT f.user_id) as unique_traders
FROM fact_trades f
JOIN dim_stocks s ON f.stock_id = s.stock_id
JOIN dim_time t ON f.time_id = t.time_id
GROUP BY t.year, t.month, s.sector;

-- Refresh daily
REFRESH MATERIALIZED VIEW CONCURRENTLY mv_monthly_summary;
```

**5. Security & Access Control:**
```sql
-- Role-based views
CREATE VIEW report_public_trading_stats AS
SELECT symbol, trade_date, total_volume, avg_price
FROM daily_summary
-- Exclude sensitive user information

GRANT SELECT ON report_public_trading_stats TO public_users;
```

---

**Q14: Explain data warehouse security best practices.**

**A:** Multi-layer security strategy:

**1. Access Control:**
```sql
-- Role-based access control (RBAC)
CREATE ROLE analyst;
CREATE ROLE manager;
CREATE ROLE admin;

-- Grant specific permissions
GRANT SELECT ON fact_trades TO analyst;
GRANT SELECT, INSERT ON fact_trades TO admin;

-- User assignment
GRANT analyst TO user_john;
GRANT manager TO user_sarah;
```

**2. Row-Level Security:**
```sql
-- Users can only see their own data
CREATE POLICY user_isolation ON fact_trades
FOR SELECT
USING (user_id = current_user_id());

-- Regional managers see only their region
CREATE POLICY regional_access ON fact_trades
FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM dim_users u
        WHERE u.user_key = fact_trades.user_id
        AND u.region = current_user_region()
    )
);
```

**3. Column-Level Security:**
```sql
-- Mask sensitive data
CREATE VIEW fact_trades_masked AS
SELECT 
    trade_id,
    time_id,
    CASE 
        WHEN current_user_role() = 'admin' THEN user_id
        ELSE NULL
    END as user_id,
    stock_id,
    quantity,
    -- Hide exact prices from non-admins
    CASE 
        WHEN current_user_role() = 'admin' THEN price
        ELSE ROUND(price, -1) -- Round to nearest 10
    END as price
FROM fact_trades;
```

**4. Data Masking:**
```javascript
function maskSensitiveData(data, userRole) {
    if (userRole !== 'ADMIN') {
        return data.map(record => ({
            ...record,
            user_email: record.user_email.replace(/(.{2})(.*)(@.*)/, '$1***$3'),
            mobile: record.mobile.replace(/\d(?=\d{4})/g, '*'),
            account_number: '****' + record.account_number.slice(-4)
        }));
    }
    return data;
}
```

**5. Encryption:**
```sql
-- Encryption at rest
CREATE TABLE sensitive_data (
    id INT,
    ssn VARCHAR(20) ENCRYPTED, -- Encrypted column
    pan VARCHAR(10) ENCRYPTED
);

-- Encryption in transit
-- Use SSL/TLS for all connections
-- Configure pg_hba.conf for SSL-only
```

**6. Audit Logging:**
```sql
CREATE TABLE audit_log (
    log_id BIGSERIAL PRIMARY KEY,
    user_id VARCHAR(50),
    action VARCHAR(50),
    table_name VARCHAR(100),
    query_text TEXT,
    ip_address VARCHAR(15),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger for sensitive table access
CREATE TRIGGER audit_fact_trades_access
AFTER SELECT ON fact_trades
FOR EACH STATEMENT
EXECUTE FUNCTION log_table_access();
```

**7. Data Classification:**
```
Level 1 - Public: Market summary stats
Level 2 - Internal: Detailed analytics
Level 3 - Confidential: User PII
Level 4 - Highly Confidential: Regulatory reports
```

**8. Network Security:**
- VPN for remote access
- IP whitelisting
- Firewall rules
- Private subnets for database

---

**Q15: What tools and technologies would you use for NSE's data warehouse?**

**A:** Recommended tech stack:

**1. Data Warehouse Platform:**
- **Snowflake** (Preferred): Cloud-native, auto-scaling, separated storage/compute
- **Amazon Redshift**: AWS ecosystem integration
- **Google BigQuery**: Serverless, pay-per-query
- **On-Premise**: PostgreSQL + Citus (if data sovereignty required)

**2. ETL/ELT Tools:**
- **Apache Airflow**: Workflow orchestration
- **dbt (data build tool)**: SQL-based transformations
- **Talend**: Enterprise ETL
- **AWS Glue**: Serverless ETL

**3. Data Integration:**
- **Apache Kafka**: Real-time data streaming
- **Debezium**: Change data capture (CDC)
- **Fivetran**: Managed data pipeline

**4. Business Intelligence:**
- **Tableau**: Interactive dashboards
- **Power BI**: Microsoft ecosystem
- **Looker**: Git-based modeling
- **Metabase**: Open-source BI

**5. Data Quality:**
- **Great Expectations**: Data validation
- **Apache Griffin**: Data quality monitoring
- **deequ**: AWS data quality library

**6. Data Catalog:**
- **Apache Atlas**: Metadata management
- **AWS Glue Catalog**: Data discovery
- **Alation**: Enterprise data catalog

**7. Monitoring:**
- **Prometheus + Grafana**: Metrics
- **ELK Stack**: Logging
- **Datadog**: APM and monitoring

**Architecture:**
```
Source Systems (PostgreSQL, Kafka)
    ↓ (Debezium CDC)
Data Lake (S3 - Raw/Bronze Layer)
    ↓ (Airflow + dbt)
Data Warehouse (Snowflake - Silver Layer)
    ↓ (dbt transformations)
Data Marts (Snowflake - Gold Layer)
    ↓
BI Tools (Tableau, Power BI)
```

---

(Questions 16-30 would continue with MongoDB Analytics, My Project Mapping, Python for Data Engineering, etc. but response is getting long)

---

## My Projects Mapped to Data Warehousing Role

### Portfolio Tracker → Data Collection & Analytics

**Relevant Skills:**
1. **Data Collection:** Integrated external API (Financial Modeling Prep)
2. **Data Storage:** MongoDB for structured stock data
3. **Data Transformation:** Price calculations, P&L aggregations
4. **Data Visualization:** HighCharts for analytics
5. **Real-time Updates:** Polling mechanism (can upgrade to streaming)

**Interview Talking Points:**
```
"In Portfolio Tracker, I implemented end-to-end data pipeline:
- Extraction: API integration with error handling and rate limiting
- Transformation: Calculate portfolio metrics, aggregate by stock
- Loading: Store in MongoDB with proper schema
- Analytics: HighCharts visualizations for trends

For NSE's data warehouse, I would scale this approach using:
- Kafka for streaming extraction
- Airflow for ETL orchestration
- Snowflake for warehouse storage
- dbt for transformation logic
- Tableau for enterprise BI"
```

### Zerodha Clone → Data Modeling

**Relevant Skills:**
1. **Schema Design:** User, Order, Portfolio models
2. **Data Relationships:** Foreign keys, references
3. **Data Integrity:** Validation, constraints
4. **Query Optimization:** Indexes for performance

**Interview Talking Points:**
```
"I designed normalized schemas for trading platform:
- User dimension with authentication attributes
- Order/Trade fact-like tables with metrics
- Portfolio as aggregated view

This translates directly to dimensional modeling:
- dim_users (Type 2 SCD for account upgrades)
- fact_orders (transaction fact table)
- fact_daily_positions (periodic snapshot)

I understand both OLTP (operational) and OLAP (analytical) design patterns."
```

### Let's Chat → Real-time Analytics

**Relevant Skills:**
1. **Real-time Data:** Message streaming with Socket.io
2. **Time-series Data:** Message history, timestamps
3. **Aggregations:** Message counts, user activity metrics
4. **Performance:** Optimized for high throughput

**Interview Talking Points:**
```
"Let's Chat processes real-time messages with sub-100ms latency, similar to 
real-time analytics needs at NSE. I implemented:
- Streaming data ingestion (Socket.io)
- Time-series storage (MongoDB with timestamps)
- Aggregations (message counts by room, user activity)
- Performance optimization (1000+ concurrent connections)

For NSE's real-time analytics, I would use:
- Kafka for message streaming
- ksqlDB for stream processing
- InfluxDB for time-series data
- Real-time dashboards with Grafana"
```

---

## SQL Practice Problems

### Problem 1: Top Performing Stocks
```sql
-- Find top 10 stocks by trading value in last 30 days
SELECT 
    s.symbol,
    s.company_name,
    SUM(f.trade_value) as total_value,
    AVG(f.price) as avg_price,
    COUNT(DISTINCT f.user_id) as unique_traders
FROM fact_trades f
JOIN dim_stocks s ON f.stock_id = s.stock_id
JOIN dim_time t ON f.time_id = t.time_id
WHERE t.date >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY s.symbol, s.company_name
ORDER BY total_value DESC
LIMIT 10;
```

### Problem 2: User Trading Patterns
```sql
-- Classify users by trading frequency
WITH user_stats AS (
    SELECT 
        u.user_id,
        COUNT(f.trade_id) as trade_count,
        AVG(f.trade_value) as avg_trade_value
    FROM dim_users u
    LEFT JOIN fact_trades f ON u.user_key = f.user_id
    WHERE u.is_current = TRUE
    GROUP BY u.user_id
)
SELECT 
    CASE 
        WHEN trade_count >= 100 THEN 'Very Active'
        WHEN trade_count >= 50 THEN 'Active'
        WHEN trade_count >= 10 THEN 'Moderate'
        ELSE 'Occasional'
    END as segment,
    COUNT(*) as user_count,
    AVG(avg_trade_value) as segment_avg_value
FROM user_stats
GROUP BY segment;
```

### Problem 3: Month-over-Month Growth
```sql
-- Calculate MoM trading volume growth
WITH monthly_volume AS (
    SELECT 
        t.year,
        t.month,
        SUM(f.quantity) as total_volume
    FROM fact_trades f
    JOIN dim_time t ON f.time_id = t.time_id
    GROUP BY t.year, t.month
)
SELECT 
    year,
    month,
    total_volume,
    LAG(total_volume) OVER (ORDER BY year, month) as prev_month_volume,
    total_volume - LAG(total_volume) OVER (ORDER BY year, month) as volume_change,
    ROUND(
        (total_volume - LAG(total_volume) OVER (ORDER BY year, month))::NUMERIC 
        / LAG(total_volume) OVER (ORDER BY year, month) * 100, 
        2
    ) as growth_percentage
FROM monthly_volume
ORDER BY year, month;
```

---

## Python for Data Engineering

### ETL Script Example

```python
import pandas as pd
import psycopg2
from datetime import datetime, timedelta

class TradesETL:
    def __init__(self):
        self.source_conn = psycopg2.connect(
            host='trading-db',
            database='trading_system',
            user='etl_user',
            password='password'
        )
        self.target_conn = psycopg2.connect(
            host='warehouse-db',
            database='analytics',
            user='warehouse_user',
            password='password'
        )
    
    def extract(self, start_date, end_date):
        """Extract trades from source database"""
        query = """
            SELECT 
                trade_id,
                user_id,
                stock_symbol,
                quantity,
                price,
                trade_type,
                trade_date,
                created_at
            FROM trades
            WHERE trade_date BETWEEN %s AND %s
        """
        
        df = pd.read_sql_query(
            query, 
            self.source_conn, 
            params=(start_date, end_date)
        )
        
        print(f"Extracted {len(df)} records")
        return df
    
    def transform(self, df):
        """Transform data"""
        # Data cleansing
        df['stock_symbol'] = df['stock_symbol'].str.strip().str.upper()
        df['quantity'] = df['quantity'].fillna(0).astype(int)
        df['price'] = df['price'].fillna(0).astype(float)
        
        # Add derived columns
        df['trade_value'] = df['quantity'] * df['price']
        df['commission'] = df['trade_value'] * 0.0005  # 0.05%
        df['tax'] = df['trade_value'] * 0.001  # 0.1%
        df['net_amount'] = df['trade_value'] + df['commission'] + df['tax']
        
        # Lookup dimension keys
        df['time_id'] = df['trade_date'].apply(self.get_time_id)
        df['user_id'] = df['user_id'].apply(self.get_user_key)
        df['stock_id'] = df['stock_symbol'].apply(self.get_stock_id)
        
        # Data validation
        df = df[
            (df['quantity'] > 0) & 
            (df['price'] > 0) &
            (df['stock_id'].notna())
        ]
        
        print(f"Transformed {len(df)} valid records")
        return df
    
    def load(self, df):
        """Load data into warehouse"""
        # Select columns for fact table
        fact_df = df[[
            'trade_id', 'time_id', 'user_id', 'stock_id',
            'quantity', 'price', 'trade_value', 
            'commission', 'tax', 'net_amount', 'trade_type'
        ]]
        
        # Bulk insert
        cursor = self.target_conn.cursor()
        
        # Prepare INSERT statement
        insert_query = """
            INSERT INTO fact_trades (
                trade_id, time_id, user_id, stock_id,
                quantity, price, trade_value,
                commission, tax, net_amount, trade_type
            ) VALUES %s
            ON CONFLICT (trade_id) DO UPDATE SET
                quantity = EXCLUDED.quantity,
                price = EXCLUDED.price,
                trade_value = EXCLUDED.trade_value
        """
        
        # Convert to tuples
        values = [tuple(row) for row in fact_df.values]
        
        # Execute batch insert
        from psycopg2.extras import execute_values
        execute_values(cursor, insert_query, values)
        
        self.target_conn.commit()
        print(f"Loaded {len(values)} records")
    
    def run(self, date):
        """Run complete ETL pipeline"""
        try:
            print(f"Starting ETL for {date}")
            
            # Extract
            df = self.extract(date, date)
            
            # Transform
            df = self.transform(df)
            
            # Load
            self.load(df)
            
            print("ETL completed successfully")
            
        except Exception as e:
            print(f"ETL failed: {str(e)}")
            raise
        finally:
            self.source_conn.close()
            self.target_conn.close()

# Run ETL
if __name__ == '__main__':
    etl = TradesETL()
    yesterday = (datetime.now() - timedelta(days=1)).date()
    etl.run(yesterday)
```

---

## Preparation Checklist

### Technical Skills
- [ ] Review SQL: joins, aggregations, window functions, CTEs
- [ ] Practice dimensional modeling (star/snowflake schema)
- [ ] Understand ETL concepts and tools
- [ ] Study data warehousing best practices
- [ ] Learn about data quality and governance
- [ ] Review your MongoDB projects
- [ ] Practice SQL on LeetCode/HackerRank

### Domain Knowledge
- [ ] Understand NSE's business
- [ ] Learn financial terminology
- [ ] Study regulatory requirements (SEBI)
- [ ] Research trading analytics use cases

### Interview Preparation
- [ ] Prepare to explain your projects
- [ ] Practice drawing architecture diagrams
- [ ] Prepare questions for interviewers
- [ ] Review this document thoroughly

### Day Before
- [ ] Test video/audio setup
- [ ] Prepare projects for demo
- [ ] Review SQL syntax
- [ ] Get good sleep

---

## Questions to Ask Interviewers

1. "What data warehouse platform does NSE currently use?"
2. "What are the biggest data quality challenges you face?"
3. "How does the team handle real-time vs batch analytics?"
4. "What BI tools are used for reporting?"
5. "What's the data volume NSE handles daily?"
6. "How is the data engineering team structured?"
7. "What learning opportunities are available?"
8. "What are the current priorities for the data warehouse team?"

---

**Remember:** Your MongoDB experience, data modeling skills, and analytical mindset are strong foundations. Focus on understanding data warehousing concepts and how your skills translate to enterprise-scale analytics!

**Good luck! 🚀**