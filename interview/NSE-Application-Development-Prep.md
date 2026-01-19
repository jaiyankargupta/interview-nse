# NSE Application Development - Interview Preparation Guide

## About National Stock Exchange (NSE)

**Organization Overview:**
- One of the world's largest stock exchanges
- Homegrown Indian brand with global vision
- First exchange in India to implement electronic (screen-based) trading in 1994
- Focus: Transparency, Efficiency, Reliability, and Performance
- Continuous innovation through technology investment

**NSE Ecosystem:**
- Connects Investors, Intermediaries, and Issuers
- Handles massive transaction volumes daily
- Requires high-performance, low-latency systems
- Mission-critical applications with zero downtime requirements

---

## Role Details

**Position**: Tech Application Development  
**Location**: Mumbai  
**Department**: ADM (Application Development & Maintenance)

**Team Focus:**
- Front-end and back-end technologies
- End-to-end project delivery
- Scalable, secure, and customer-centric digital solutions
- Web and mobile platforms
- Data Warehousing & Analytics
- Distributed systems development

---

## Key Responsibilities Mapped to Your Experience

### 1. Develop and Maintain Scalable, Distributed Systems

**Your Experience:**
- **Let's Chat**: Built real-time chat supporting 1000+ concurrent connections
- **Portfolio Tracker**: Designed scalable architecture for real-time stock data
- **Zerodha Clone**: Multi-application architecture with shared backend

**Interview Talking Points:**
- Handled concurrent user connections with Socket.io
- Implemented efficient database queries with MongoDB indexing
- Designed stateless APIs for horizontal scaling
- Used Redis adapter concept for distributed Socket.io (theoretical knowledge)

### 2. Develop Responsive Applications

**Your Experience:**
- **All Projects**: Responsive design with Bootstrap, Material-UI, TailwindCSS
- **Mobile-first approach** in Let's Chat with TailwindCSS
- **Cross-device compatibility** tested across viewport sizes

**Interview Talking Points:**
- Mobile-first responsive design principles
- CSS Grid and Flexbox expertise
- Material-UI responsive components
- Progressive Web App concepts

### 3. Collaborate with Cross-Functional Teams

**Your Experience:**
- Solo projects demonstrate ability to wear multiple hats
- Full-stack ownership from design to deployment
- Client-server communication architecture

**Interview Talking Points:**
- Can work independently or in teams
- Understanding of both frontend and backend perspectives
- Experience translating business requirements to technical specs
- Documentation skills for team collaboration

### 4. Translate Business Requirements to Technical Specifications

**Your Experience:**
- **Portfolio Tracker**: Translated "track stock portfolio" into real-time polling system, API integration, chart visualizations
- **Zerodha Clone**: Analyzed trading platform requirements, implemented authentication, trading interface
- **Let's Chat**: Converted chat requirements into WebSocket architecture, room management, presence tracking

**Interview Talking Points:**
- Requirements gathering and analysis
- Technical architecture documentation
- API design based on use cases
- Database schema design from business entities

### 5. Complete SDLC Participation

**Your Experience:**
- **Design**: Architecture diagrams, database schemas, API endpoints
- **Development**: Full-stack implementation with modern tech
- **Testing**: Manual testing, error handling, edge case coverage
- **Deployment**: Local deployment, environment configuration

**Interview Talking Points:**
- Agile methodology awareness
- Version control with Git
- Environment management (dev/staging/prod)
- Continuous integration concepts

### 6. Code Reviews and Quality Standards

**Your Experience:**
- Clean, documented code across all projects
- Consistent coding standards
- Error handling best practices
- Security implementations

**Interview Talking Points:**
- Code review checklist (security, performance, readability)
- Linting and formatting tools (ESLint, Prettier)
- Design patterns and best practices
- Technical debt management

---

## Technical Skills Mapping to NSE Requirements

### Programming Languages (C, C++, Java, Python)

**Your Proficiency:**
- **JavaScript/Node.js**: Expert level (NSE uses Node.js for backend)
- **Python**: Proficient (mention if you know Python from curriculum)
- **Java**: Curriculum knowledge (be honest about level)
- **C/C++**: Engineering curriculum (mention data structures in C/C++)

**NSE Context:**
- Trading systems often use C++ for performance
- Python for data analytics and scripting
- Java for enterprise applications
- Node.js for real-time APIs

**Interview Approach:**
```
"While my primary expertise is in JavaScript/Node.js ecosystem, I have 
strong foundation in C/C++ from my engineering curriculum where I 
implemented data structures and algorithms. I'm a fast learner and can 
quickly adapt to Java or Python as required. My understanding of 
programming fundamentals, algorithms, and system design translates 
across languages."
```

### Strong Analytical and Problem-Solving Skills

**Your Examples:**
1. **Real-time Synchronization Challenge (Let's Chat)**
   - Problem: Message ordering and consistency across users
   - Solution: Timestamps, optimistic UI, server acknowledgments
   - Result: Sub-100ms delivery with consistency

2. **API Rate Limiting (Portfolio Tracker)**
   - Problem: 250 requests/day limit, multiple stocks to track
   - Solution: Batch requests, caching with 30s TTL
   - Result: Efficient API usage staying within limits

3. **Authentication Security (Zerodha Clone)**
   - Problem: Secure user authentication for financial platform
   - Solution: JWT + bcrypt + Passport.js + HTTP-only cookies
   - Result: Enterprise-grade security implementation

4. **Performance Optimization (All Projects)**
   - Problem: Slow React renders, API bottlenecks
   - Solution: Memoization, virtual scrolling, database indexing
   - Result: Optimized user experience

### Excellent Communication Skills

**Your Demonstrations:**
- Comprehensive project documentation
- Clear README files with setup instructions
- Code comments explaining complex logic
- Architecture documentation

**Interview Preparation:**
- Practice explaining technical concepts simply
- Use analogies for complex topics
- Structure answers: Problem → Approach → Solution → Result
- Ask clarifying questions before answering

### Adaptability in Fast-Paced Environment

**Your Examples:**
- Built three production-ready projects in short timeframes
- Learned Socket.io, Firebase, Material-UI quickly
- Adapted to multiple UI frameworks (Bootstrap, Material-UI, TailwindCSS)
- Self-taught full-stack development

---

## NSE-Specific Technical Deep Dive

### 1. Financial Domain Knowledge

**What NSE Needs:**
- Understanding of trading systems
- Market data processing
- Order matching engines
- Real-time price dissemination

**Your Relevant Experience:**
- **Portfolio Tracker**: Real-time stock data, price calculations, profit/loss tracking
- **Zerodha Clone**: Trading platform UI/UX, order placement concepts

**Learn Before Interview:**
- Trading terminology: Order types (Market, Limit, Stop-Loss)
- Market participants: Retail investors, brokers, institutional traders
- Trading lifecycle: Order → Matching → Execution → Settlement
- NSE products: Equities, Derivatives, Currency, Debt
- Market timings and trading hours
- Circuit breakers and price bands

**Interview Questions You Might Ask:**
- "What kind of trading systems will I be working on?"
- "What's the expected latency for order processing?"
- "How does NSE handle peak trading volumes?"

### 2. High-Performance Systems

**NSE Requirements:**
- Low-latency order processing (microseconds)
- High throughput (millions of transactions/day)
- 99.99%+ uptime requirements
- Real-time data dissemination

**Your Talking Points:**
- WebSocket experience for real-time data
- Understanding of async/non-blocking I/O in Node.js
- Database optimization with indexing
- Caching strategies for performance

**Areas to Study:**
- In-memory databases (Redis)
- Message queues (RabbitMQ, Kafka)
- Load balancing strategies
- Database sharding and partitioning
- Microservices architecture
- API gateway patterns

### 3. Data Warehousing & Analytics

**NSE Responsibilities:**
- Designing data warehouse architecture
- Developing analytical solutions
- Creating database infrastructure
- Data integrity and quality
- Training data models

**Your Relevant Experience:**
- MongoDB database design and querying
- Data aggregation and calculations
- Schema design for analytics
- Understanding of ETL concepts (Extract, Transform, Load)

**Learn Before Interview:**
- Data warehouse concepts vs transactional databases
- OLAP vs OLTP
- Star schema and snowflake schema
- Data marts
- BI tools awareness (Tableau, Power BI)
- Big Data basics (Hadoop, Spark)
- SQL proficiency review

### 4. Security and Compliance

**NSE Critical Requirements:**
- Financial data security
- Regulatory compliance (SEBI guidelines)
- Audit trails
- Access control

**Your Experience:**
- JWT authentication implementation
- bcrypt password hashing
- Firebase Auth integration
- Secure API design
- CORS configuration

**Additional Security Topics:**
- Encryption at rest and in transit
- Role-based access control (RBAC)
- OAuth 2.0 and OpenID Connect
- API security best practices
- SQL injection prevention
- XSS and CSRF protection
- Security audits and penetration testing

---

## Interview Questions & Answers

### Section 1: General Technical (20 Questions)

**Q1: Explain the difference between monolithic and microservices architecture. When would you use each?**

**A:** Monolithic architecture is a single, unified application where all components are interconnected and interdependent. All code runs in a single process, shares the same database, and is deployed as one unit.

Microservices architecture breaks the application into small, independent services that communicate via APIs. Each service has its own database and can be deployed independently.

**When to use Monolithic:**
- Small to medium applications
- Limited team size
- Simple business logic
- Quick time to market needed
- Example: My projects (Portfolio Tracker, Let's Chat) are monolithic

**When to use Microservices:**
- Large, complex applications like NSE
- Multiple teams working independently
- Different scaling requirements for different features
- Need for technology diversity
- High availability requirements

**NSE Context:** Trading systems likely use microservices - order management, market data, settlement, reporting as separate services for better scalability and fault isolation.

---

**Q2: How would you design a real-time stock price dissemination system?**

**A:** I would design a pub-sub architecture:

**Components:**
1. **Data Source**: Exchange feed with stock prices
2. **Message Queue**: Kafka/RabbitMQ to buffer incoming prices
3. **Processing Layer**: Consumer services to validate and transform data
4. **Cache Layer**: Redis to store latest prices for quick retrieval
5. **WebSocket Server**: Socket.io to push updates to connected clients
6. **Database**: Time-series database (InfluxDB) for historical data

**Flow:**
1. Exchange publishes price updates to Kafka topics (per stock)
2. Consumer services subscribe to topics
3. Process and validate data
4. Update Redis cache with latest price
5. Broadcast to WebSocket clients subscribed to that stock
6. Store in time-series DB for historical queries

**Scalability:**
- Partition Kafka topics by stock symbol
- Multiple WebSocket servers with load balancer
- Redis cluster for cache distribution
- Horizontal scaling of consumer services

**My Experience:** Implemented polling-based updates in Portfolio Tracker. For NSE scale, would use push-based WebSocket with message queues.

---

**Q3: Explain how you would handle database transactions in a trading system.**

**A:** Trading systems require ACID properties (Atomicity, Consistency, Isolation, Durability) for data integrity.

**Key Principles:**
1. **Atomicity**: All or nothing - order placement either fully succeeds or fully fails
2. **Consistency**: Account balance should always be correct
3. **Isolation**: Concurrent trades shouldn't interfere
4. **Durability**: Committed trades are permanent

**MongoDB Transactions (My Experience):**
```javascript
const session = await mongoose.startSession();
session.startTransaction();
try {
  // Deduct amount from buyer
  await Account.updateOne(
    { userId: buyerId },
    { $inc: { balance: -amount } },
    { session }
  );
  
  // Add amount to seller
  await Account.updateOne(
    { userId: sellerId },
    { $inc: { balance: amount } },
    { session }
  );
  
  // Create trade record
  await Trade.create([{ buyerId, sellerId, amount }], { session });
  
  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}
```

**For NSE Scale:**
- Use relational databases (PostgreSQL) with strong ACID guarantees
- Implement optimistic locking with version numbers
- Use database-level constraints
- Two-phase commit for distributed transactions
- Event sourcing for audit trail

---

**Q4: How do you ensure high availability in critical systems?**

**A:** High availability strategies I would implement:

**1. Redundancy:**
- Multiple server instances (load balanced)
- Database replication (master-slave, multi-master)
- Backup power and network connections

**2. Load Balancing:**
- Distribute traffic across servers
- Health checks to detect failures
- Automatic failover to healthy instances

**3. Database Strategy:**
- MongoDB replica sets (automatic failover)
- Read replicas to distribute load
- Regular backups with point-in-time recovery

**4. Monitoring & Alerting:**
- Real-time monitoring (Prometheus, Grafana)
- Alert on failures, high latency, errors
- Automated incident response

**5. Graceful Degradation:**
- Fallback mechanisms
- Circuit breakers to prevent cascading failures
- Rate limiting to prevent overload

**6. Zero-Downtime Deployment:**
- Blue-green deployment
- Rolling updates
- Canary releases

**My Experience:**
- Implemented automatic WebSocket reconnection in Let's Chat
- Error handling with fallbacks
- Health check endpoints in APIs

**NSE Requirements:** 99.99%+ uptime = max 52 minutes downtime per year. Critical during market hours (9:15 AM - 3:30 PM).

---

**Q5: Explain your approach to API design for a trading platform.**

**A:** RESTful API design principles with financial system considerations:

**1. Resource-Based URLs:**
```
GET    /api/orders          - List all orders
GET    /api/orders/:id      - Get specific order
POST   /api/orders          - Place new order
PUT    /api/orders/:id      - Modify order (if allowed)
DELETE /api/orders/:id      - Cancel order
GET    /api/portfolio       - Get user portfolio
GET    /api/stocks/:symbol  - Get stock details
```

**2. Idempotency:**
- Use idempotency keys for POST requests
- Prevent duplicate order placement
- Safe retry mechanism

**3. Authentication & Authorization:**
```javascript
// JWT middleware
app.use('/api/orders', authenticateJWT);

// Authorization check
const canPlaceOrder = (user, orderAmount) => {
  return user.balance >= orderAmount && user.kycVerified;
};
```

**4. Rate Limiting:**
- Prevent abuse and ensure fair usage
- Different limits for different endpoints
- Return 429 with Retry-After header

**5. Versioning:**
```
/api/v1/orders
/api/v2/orders
```

**6. Error Handling:**
```json
{
  "error": {
    "code": "INSUFFICIENT_FUNDS",
    "message": "Insufficient balance to place order",
    "details": {
      "required": 10000,
      "available": 5000
    }
  }
}
```

**7. Response Standards:**
```json
{
  "data": { ... },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "requestId": "uuid"
  }
}
```

**My Implementation:** Used these principles in all three projects with proper HTTP methods, status codes, and error handling.

---

**Q6: How would you optimize database queries for a high-traffic application?**

**A:** Database optimization strategies:

**1. Indexing:**
```javascript
// MongoDB indexes
userSchema.index({ email: 1 }, { unique: true });
orderSchema.index({ userId: 1, createdAt: -1 });
orderSchema.index({ symbol: 1, status: 1 });

// Compound index for common queries
orderSchema.index({ userId: 1, symbol: 1, createdAt: -1 });
```

**2. Query Optimization:**
```javascript
// Bad: Fetch all fields
const users = await User.find();

// Good: Project only needed fields
const users = await User.find().select('name email');

// Use lean() for read-only queries
const orders = await Order.find({ userId }).lean();
```

**3. Pagination:**
```javascript
// Offset-based (simple but slow for large datasets)
const orders = await Order.find()
  .skip(page * limit)
  .limit(limit);

// Cursor-based (better performance)
const orders = await Order.find({
  _id: { $gt: lastSeenId }
}).limit(limit);
```

**4. Aggregation Pipeline:**
```javascript
// Efficient data aggregation
const portfolioSummary = await Order.aggregate([
  { $match: { userId: ObjectId(userId) } },
  { $group: {
    _id: "$symbol",
    totalQuantity: { $sum: "$quantity" },
    avgPrice: { $avg: "$price" }
  }},
  { $sort: { totalQuantity: -1 } }
]);
```

**5. Caching:**
- Redis for frequently accessed data
- Cache invalidation strategy
- TTL for cache entries

**6. Connection Pooling:**
```javascript
mongoose.connect(uri, {
  maxPoolSize: 10,
  minPoolSize: 5
});
```

**7. Database Sharding:**
- Partition data across multiple servers
- Shard by userId for even distribution

**My Experience:** Implemented indexing in Portfolio Tracker, used projection and lean() for performance, pagination in Let's Chat.

---

**Q7: Explain the event-driven architecture. When would you use it?**

**A:** Event-driven architecture is a pattern where components communicate by producing and consuming events asynchronously.

**Components:**
1. **Event Producers**: Emit events when something happens
2. **Event Consumers**: Listen for and react to events
3. **Event Broker**: Message queue (Kafka, RabbitMQ) that routes events

**Example in Trading System:**
```
Order Placed Event → [Kafka] → Consumed by:
  - Risk Management Service (validate limits)
  - Order Matching Service (match with opposite orders)
  - Notification Service (send confirmation to user)
  - Analytics Service (update trading metrics)
```

**Benefits:**
- **Loose Coupling**: Services don't need to know about each other
- **Scalability**: Each consumer can scale independently
- **Resilience**: If one consumer fails, others continue
- **Async Processing**: Non-blocking operations

**When to Use:**
- Microservices communication
- Real-time data processing
- Event sourcing for audit trails
- Integration with multiple systems
- High-throughput scenarios

**My Experience:**
- Socket.io event-driven architecture in Let's Chat
- Event emitters in Node.js for various operations
- Understand pub-sub pattern from WebSocket implementation

**NSE Use Case:** 
- Order lifecycle events
- Market data distribution
- Settlement processing
- Regulatory reporting

---

**Q8: How do you handle concurrent requests to update the same resource?**

**A:** Concurrency control is critical in trading systems to prevent race conditions.

**Strategies:**

**1. Optimistic Locking (Version Control):**
```javascript
// MongoDB with version key
const orderSchema = new Schema({
  quantity: Number,
  price: Number,
  __v: { type: Number, default: 0 }
});

// Update with version check
const result = await Order.findOneAndUpdate(
  { _id: orderId, __v: currentVersion },
  { 
    $set: { quantity: newQuantity },
    $inc: { __v: 1 }
  }
);

if (!result) {
  throw new Error('Concurrent modification detected');
}
```

**2. Pessimistic Locking:**
```javascript
// Database-level locks
BEGIN TRANSACTION;
SELECT * FROM orders WHERE id = ? FOR UPDATE;
-- No other transaction can modify this row
UPDATE orders SET quantity = ? WHERE id = ?;
COMMIT;
```

**3. Atomic Operations:**
```javascript
// MongoDB atomic operators
await Account.updateOne(
  { userId, balance: { $gte: amount } },
  { $inc: { balance: -amount } }
);
// Fails if balance insufficient, atomically
```

**4. Queue-Based Processing:**
```javascript
// All updates to same resource go through queue
const orderQueue = new Queue('order-updates');
orderQueue.process(async (job) => {
  await updateOrder(job.data);
});
```

**5. Distributed Locks (Redis):**
```javascript
const lock = await redis.lock('order:' + orderId, 5000);
try {
  // Only one process can execute this
  await updateOrder(orderId, data);
} finally {
  await lock.unlock();
}
```

**My Experience:** Used MongoDB version keys in projects, understood atomic operations concept.

**NSE Critical:** Order book updates must be serialized to prevent double execution or incorrect matching.

---

**Q9: Explain your testing strategy for a critical financial application.**

**A:** Comprehensive testing approach for financial systems:

**1. Unit Testing:**
```javascript
// Test individual functions
describe('calculatePnL', () => {
  it('should calculate profit correctly', () => {
    const result = calculatePnL(buyPrice: 100, sellPrice: 110, qty: 10);
    expect(result).toBe(100); // (110-100) * 10
  });
  
  it('should calculate loss correctly', () => {
    const result = calculatePnL(buyPrice: 100, sellPrice: 90, qty: 10);
    expect(result).toBe(-100);
  });
});
```

**2. Integration Testing:**
```javascript
// Test API endpoints
describe('POST /api/orders', () => {
  it('should place order with valid data', async () => {
    const response = await request(app)
      .post('/api/orders')
      .send({ symbol: 'RELIANCE', qty: 10, price: 2500 })
      .expect(201);
    
    expect(response.body.orderId).toBeDefined();
  });
  
  it('should reject order with insufficient funds', async () => {
    // Test business logic
  });
});
```

**3. End-to-End Testing:**
- Cypress/Selenium for UI flows
- Complete user journey testing
- Cross-browser testing

**4. Performance Testing:**
- Load testing with Apache JMeter
- Stress testing to find breaking points
- Latency measurement
- Concurrent user simulation

**5. Security Testing:**
- Penetration testing
- SQL injection tests
- XSS/CSRF vulnerability checks
- Authentication/authorization testing

**6. Financial Accuracy Testing:**
- Reconciliation tests
- Balance verification
- PnL calculation accuracy
- Edge cases (negative values, zero quantities)

**7. Regression Testing:**
- Automated test suite runs on every commit
- Prevents new bugs from being introduced

**My Approach:**
- Manual testing during development
- Error scenarios tested
- Would implement automated tests for production

---

**Q10: How would you implement a circuit breaker pattern?**

**A:** Circuit breaker prevents cascading failures by stopping requests to a failing service.

**States:**
1. **Closed**: Normal operation, requests pass through
2. **Open**: Service failing, requests immediately fail
3. **Half-Open**: Testing if service recovered

**Implementation:**
```javascript
class CircuitBreaker {
  constructor(service, options = {}) {
    this.service = service;
    this.failureThreshold = options.failureThreshold || 5;
    this.timeout = options.timeout || 60000; // 1 minute
    this.state = 'CLOSED';
    this.failureCount = 0;
    this.nextAttempt = Date.now();
  }
  
  async call(...args) {
    if (this.state === 'OPEN') {
      if (Date.now() < this.nextAttempt) {
        throw new Error('Circuit breaker is OPEN');
      }
      this.state = 'HALF_OPEN';
    }
    
    try {
      const result = await this.service(...args);
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  onSuccess() {
    this.failureCount = 0;
    this.state = 'CLOSED';
  }
  
  onFailure() {
    this.failureCount++;
    if (this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN';
      this.nextAttempt = Date.now() + this.timeout;
    }
  }
}

// Usage
const externalAPI = new CircuitBreaker(fetchStockPrice, {
  failureThreshold: 3,
  timeout: 30000
});

try {
  const price = await externalAPI.call('RELIANCE');
} catch (error) {
  // Use cached data or show error
  return getCachedPrice('RELIANCE');
}
```

**Benefits:**
- Prevents overwhelming failing service
- Fast failure (don't wait for timeout)
- Automatic recovery testing
- Improves user experience with fallbacks

**My Implementation:** Would use this for external API calls in Portfolio Tracker to handle API downtime gracefully.

---

### Section 2: Data Structures & Algorithms (10 Questions)

**Q11: Implement an order book data structure for matching buy and sell orders.**

**A:** Order book maintains buy orders (bids) and sell orders (asks) for efficient matching.

**Data Structure:**
```javascript
class OrderBook {
  constructor() {
    // Max heap for buy orders (highest price first)
    this.buyOrders = new MaxHeap((a, b) => a.price - b.price);
    // Min heap for sell orders (lowest price first)
    this.sellOrders = new MinHeap((a, b) => a.price - b.price);
  }
  
  addOrder(order) {
    if (order.type === 'BUY') {
      this.buyOrders.insert(order);
    } else {
      this.sellOrders.insert(order);
    }
    
    this.matchOrders();
  }
  
  matchOrders() {
    while (
      !this.buyOrders.isEmpty() && 
      !this.sellOrders.isEmpty() &&
      this.buyOrders.peek().price >= this.sellOrders.peek().price
    ) {
      const buyOrder = this.buyOrders.peek();
      const sellOrder = this.sellOrders.peek();
      
      const matchedQty = Math.min(buyOrder.quantity, sellOrder.quantity);
      const matchedPrice = sellOrder.price; // Sell price
      
      // Execute trade
      this.executeTrade({
        buyer: buyOrder.userId,
        seller: sellOrder.userId,
        quantity: matchedQty,
        price: matchedPrice
      });
      
      // Update quantities
      buyOrder.quantity -= matchedQty;
      sellOrder.quantity -= matchedQty;
      
      // Remove filled orders
      if (buyOrder.quantity === 0) this.buyOrders.extract();
      if (sellOrder.quantity === 0) this.sellOrders.extract();
    }
  }
  
  executeTrade(trade) {
    console.log(`Trade executed: ${trade.quantity} @ ${trade.price}`);
    // Save to database, notify users, etc.
  }
}

// Heap implementation
class MaxHeap {
  constructor(compareFn) {
    this.heap = [];
    this.compare = compareFn;
  }
  
  insert(item) {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }
  
  extract() {
    if (this.heap.length === 0) return null;
    const max = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return max;
  }
  
  peek() {
    return this.heap[0];
  }
  
  isEmpty() {
    return this.heap.length === 0;
  }
  
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(this.heap[index], this.heap[parentIndex]) <= 0) break;
      [this.heap[index], this.heap[parentIndex]] = 
        [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }
  
  bubbleDown(index) {
    while (true) {
      let largest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      
      if (left < this.heap.length && 
          this.compare(this.heap[left], this.heap[largest]) > 0) {
        largest = left;
      }
      
      if (right < this.heap.length && 
          this.compare(this.heap[right], this.heap[largest]) > 0) {
        largest = right;
      }
      
      if (largest === index) break;
      
      [this.heap[index], this.heap[largest]] = 
        [this.heap[largest], this.heap[index]];
      index = largest;
    }
  }
}
```

**Time Complexity:**
- Insert: O(log n)
- Match: O(log n) per matched order
- Peek best price: O(1)

**Space Complexity:** O(n) where n is number of pending orders

---

**Q12: Find the maximum profit from stock prices array.**

**A:** Classic DP problem - buy low, sell high once.

```javascript
function maxProfit(prices) {
  if (prices.length < 2) return 0;
  
  let minPrice = prices[0];
  let maxProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    // Update max profit if selling today gives better profit
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    
    // Update min price seen so far
    minPrice = Math.min(minPrice, prices[i]);
  }
  
  return maxProfit;
}

// Test
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 (buy at 1, sell at 6)
console.log(maxProfit([7, 6, 4, 3, 1])); // 0 (no profit possible)
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

**Multiple Transactions Allowed:**
```javascript
function maxProfitMultiple(prices) {
  let profit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    // Add profit for every increase
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  
  return profit;
}

console.log(maxProfitMultiple([7, 1, 5, 3, 6, 4])); // 7
// Buy at 1, sell at 5 (profit 4)
// Buy at 3, sell at 6 (profit 3)
// Total: 7
```

---

**Q13: Implement LRU Cache for market data.**

**A:** LRU (Least Recently Used) Cache with O(1) get and put.

```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Maintains insertion order
  }
  
  get(key) {
    if (!this.cache.has(key)) return -1;
    
    // Move to end (most recently used)
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    
    return value;
  }
  
  put(key, value) {
    // Delete if exists
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    
    // Add to end
    this.cache.set(key, value);
    
    // Remove oldest if over capacity
    if (this.cache.size > this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}

// Usage for stock prices
const stockCache = new LRUCache(100); // Cache 100 stocks

stockCache.put('RELIANCE', { price: 2500, time: Date.now() });
stockCache.put('TCS', { price: 3600, time: Date.now() });

const price = stockCache.get('RELIANCE');
// 'RELIANCE' moved to end, marked as recently used
```

**Time Complexity:** O(1) for both get and put  
**Space Complexity:** O(capacity)

---

**Q14: Design a rate limiter using sliding window.**

**A:** Prevent abuse by limiting requests per time window.

```javascript
class RateLimiter {
  constructor(maxRequests, windowMs) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = new Map(); // userId -> array of timestamps
  }
  
  isAllowed(userId) {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    // Get user's request history
    if (!this.requests.has(userId)) {
      this.requests.set(userId, []);
    }
    
    const userRequests = this.requests.get(userId);
    
    // Remove requests outside current window
    const validRequests = userRequests.filter(time => time > windowStart);
    this.requests.set(userId, validRequests);
    
    // Check if under limit
    if (validRequests.length < this.maxRequests) {
      validRequests.push(now);
      return true;
    }
    
    return false;
  }
  
  getRemainingTime(userId) {
    const userRequests = this.requests.get(userId) || [];
    if (userRequests.length < this.maxRequests) return 0;
    
    const oldestRequest = userRequests[0];
    const resetTime = oldestRequest + this.windowMs;
    return Math.max(0, resetTime - Date.now());
  }
}

// Usage
const limiter = new RateLimiter(10, 60000); // 10 requests per minute

app.post('/api/orders', (req, res) => {
  if (!limiter.isAllowed(req.user.id)) {
    const retryAfter = limiter.getRemainingTime(req.user.id);
    return res.status(429).json({
      error: 'Rate limit exceeded',
      retryAfter: Math.ceil(retryAfter / 1000) // seconds
    });
  }
  
  // Process order
});
```

**Time Complexity:** O(n) where n = number of requests in window  
**Space Complexity:** O(users × maxRequests)

**Optimization:** Use Redis sorted sets for distributed systems.

---

**Q15: Implement a priority queue for order execution.**

**A:** Priority queue ensures important orders (e.g., market orders) execute first.

```javascript
class PriorityQueue {
  constructor(compareFn) {
    this.heap = [];
    this.compare = compareFn || ((a, b) => a - b);
  }
  
  enqueue(item, priority) {
    const node = { item, priority };
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }
  
  dequeue() {
    if (this.isEmpty()) return null;
    
    const min = this.heap[0];
    const last = this.heap.pop();
    
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    
    return min.item;
  }
  
  peek() {
    return this.heap[0]?.item;
  }
  
  isEmpty() {
    return this.heap.length === 0;
  }
  
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(
        this.heap[index].priority, 
        this.heap[parentIndex].priority
      ) >= 0) break;
      
      [this.heap[index], this.heap[parentIndex]] = 
        [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }
  
  bubbleDown(index) {
    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      
      if (left < this.heap.length && 
          this.compare(
            this.heap[left].priority, 
            this.heap[smallest].priority
          ) < 0) {
        smallest = left;
      }
      
      if (right < this.heap.length && 
          this.compare(
            this.heap[right].priority, 
            this.heap[smallest].priority
          ) < 0) {
        smallest = right;
      }
      
      if (smallest === index) break;
      
      [this.heap[index], this.heap[smallest]] = 
        [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

// Usage for order execution
const orderQueue = new PriorityQueue((a, b) => a - b);

// Priority levels: 1 = highest (market orders), 2 = limit orders, etc.
orderQueue.enqueue({ orderId: 1, type: 'MARKET' }, 1);
orderQueue.enqueue({ orderId: 2, type: 'LIMIT' }, 2);
orderQueue.enqueue({ orderId: 3, type: 'MARKET' }, 1);

while (!orderQueue.isEmpty()) {
  const order = orderQueue.dequeue();
  console.log('Processing:', order);
}
// Processes: order 1, order 3, order 2
```

---

**Q16: Find missing number in sequence (order IDs).**

**A:** If order IDs should be sequential, find the missing one.

**Method 1: Sum Formula**
```javascript
function findMissing(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissing([1, 2, 4, 5], 5)); // 3
```

**Method 2: XOR (handles duplicates)**
```javascript
function findMissingXOR(arr, n) {
  let xor = 0;
  
  // XOR all array elements
  for (let num of arr) {
    xor ^= num;
  }
  
  // XOR with all numbers 1 to n
  for (let i = 1; i <= n; i++) {
    xor ^= i;
  }
  
  return xor;
}
```

**Time:** O(n), **Space:** O(1)

---

**Q17: Detect cycle in user transaction graph.**

**A:** Detect circular dependencies or fraud patterns.

```javascript
function hasCycle(graph) {
  const visited = new Set();
  const recursionStack = new Set();
  
  function dfs(node) {
    visited.add(node);
    recursionStack.add(node);
    
    for (let neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) return true;
      } else if (recursionStack.has(neighbor)) {
        return true; // Cycle detected
      }
    }
    
    recursionStack.delete(node);
    return false;
  }
  
  for (let node in graph) {
    if (!visited.has(node)) {
      if (dfs(node)) return true;
    }
  }
  
  return false;
}

// Usage
const transactions = {
  'A': ['B'],
  'B': ['C'],
  'C': ['A'] // Cycle: A -> B -> C -> A
};

console.log(hasCycle(transactions)); // true
```

**Time:** O(V + E), **Space:** O(V)

---

**Q18: Merge sorted arrays of stock prices from multiple sources.**

**A:** Merge K sorted arrays efficiently.

```javascript
function mergeKSorted(arrays) {
  const pq = new PriorityQueue((a, b) => a.value - b.value);
  const result = [];
  
  // Add first element from each array
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length > 0) {
      pq.enqueue({
        value: arrays[i][0],
        arrayIndex: i,
        elementIndex: 0
      }, arrays[i][0]);
    }
  }
  
  while (!pq.isEmpty()) {
    const { value, arrayIndex, elementIndex } = pq.dequeue();
    result.push(value);
    
    // Add next element from same array
    if (elementIndex + 1 < arrays[arrayIndex].length) {
      const nextValue = arrays[arrayIndex][elementIndex + 1];
      pq.enqueue({
        value: nextValue,
        arrayIndex,
        elementIndex: elementIndex + 1
      }, nextValue);
    }
  }
  
  return result;
}

// Usage
const source1 = [100, 105, 110]; // Price feed 1
const source2 = [102, 107, 112]; // Price feed 2
const source3 = [101, 106, 111]; // Price feed 3

const merged = mergeKSorted([source1, source2, source3]);
console.log(merged); // [100, 101, 102, 105, 106, 107, 110, 111, 112]
```

**Time:** O(N log K) where N = total elements, K = number of arrays  
**Space:** O(K) for priority queue

---

**Q19: Implement binary search for finding nearest stock price.**

**A:** Find closest price in sorted historical data.

```javascript
function findClosestPrice(prices, target) {
  let left = 0;
  let right = prices.length - 1;
  let closest = prices[0];
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    // Update closest
    if (Math.abs(prices[mid] - target) < Math.abs(closest - target)) {
      closest = prices[mid];
    }
    
    if (prices[mid] === target) {
      return prices[mid];
    } else if (prices[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return closest;
}

// Historical prices (sorted)
const prices = [100, 105, 110, 115, 120, 125];
console.log(findClosestPrice(prices, 112)); // 110
console.log(findClosestPrice(prices, 118)); // 120
```

**Time:** O(log n), **Space:** O(1)

---

**Q20: Calculate moving average for stock prices.**

**A:** Sliding window approach for technical analysis.

```javascript
class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = [];
    this.sum = 0;
  }
  
  next(val) {
    this.queue.push(val);
    this.sum += val;
    
    if (this.queue.length > this.size) {
      this.sum -= this.queue.shift();
    }
    
    return this.sum / this.queue.length;
  }
}

// Usage: 5-day moving average
const ma = new MovingAverage(5);
console.log(ma.next(100)); // 100
console.log(ma.next(105)); // 102.5
console.log(ma.next(110)); // 105
console.log(ma.next(115)); // 107.5
console.log(ma.next(120)); // 110
console.log(ma.next(125)); // 115 (average of last 5)
```

**Time:** O(1) per operation  
**Space:** O(size)

---

### Section 3: System Design (5 Questions)

**Q21: Design a stock trading platform like NSE.**

**A:** High-level system design:

**Components:**

1. **Frontend Layer:**
   - Web application (React)
   - Mobile apps (React Native)
   - WebSocket for real-time updates

2. **API Gateway:**
   - Load balancer
   - Authentication/Authorization
   - Rate limiting
   - API routing

3. **Microservices:**
   - **User Service**: Registration, KYC, profiles
   - **Order Service**: Place, modify, cancel orders
   - **Matching Engine**: Match buy/sell orders
   - **Portfolio Service**: Holdings, PnL calculation
   - **Market Data Service**: Real-time price dissemination
   - **Settlement Service**: T+2 settlement processing
   - **Notification Service**: SMS, email, push notifications

4. **Message Queue:**
   - Kafka for event streaming
   - Order lifecycle events
   - Market data distribution

5. **Databases:**
   - **PostgreSQL**: Transactional data (orders, trades, accounts)
   - **MongoDB**: User profiles, logs
   - **Redis**: Session storage, cache, real-time data
   - **InfluxDB**: Time-series data (price history)

6. **External Integrations:**
   - Payment gateways
   - Bank APIs
   - Regulatory systems (SEBI)
   - Market data providers

**Data Flow:**

```
User places order via Web/Mobile
    ↓
API Gateway (auth, validation)
    ↓
Order Service (validate funds, create order)
    ↓
Kafka (order.placed event)
    ↓
Matching Engine (match with opposite orders)
    ↓
Trade Execution
    ↓
Update Portfolio Service
    ↓
Notification Service (confirm to user)
    ↓
Settlement Service (T+2 settlement)
```

**Scalability:**
- Horizontal scaling of all services
- Database sharding by user ID
- CDN for static assets
- Redis cluster for distributed cache
- Multiple data centers for HA

**Security:**
- HTTPS/TLS for all communications
- OAuth 2.0 / JWT authentication
- Encryption at rest and in transit
- Two-factor authentication
- IP whitelisting for brokers
- DDoS protection
- Regular security audits

**Monitoring:**
- Prometheus + Grafana for metrics
- ELK stack for logs
- Distributed tracing (Jaeger)
- Real-time alerts

---

**Q22: Design a data warehouse for NSE analytics.**

**A:** ETL pipeline and warehouse architecture:

**Architecture:**

1. **Data Sources:**
   - Trading system database
   - Market data feeds
   - User activity logs
   - External market data

2. **ETL Layer:**
   - **Extract**: Pull data from sources daily/hourly
   - **Transform**: Clean, aggregate, enrich data
   - **Load**: Insert into warehouse

3. **Data Warehouse:**
   - **Fact Tables**:
     - `fact_trades`: Every trade executed
     - `fact_orders`: All orders placed
     - `fact_daily_prices`: EOD prices
   - **Dimension Tables**:
     - `dim_users`: User master data
     - `dim_stocks`: Stock master data
     - `dim_time`: Date/time dimensions
     - `dim_broker`: Broker information

**Star Schema Example:**

```sql
-- Fact Table
CREATE TABLE fact_trades (
  trade_id BIGINT PRIMARY KEY,
  order_id BIGINT,
  user_id INT REFERENCES dim_users(user_id),
  stock_id INT REFERENCES dim_stocks(stock_id),
  time_id INT REFERENCES dim_time(time_id),
  broker_id INT REFERENCES dim_broker(broker_id),
  quantity INT,
  price DECIMAL(10, 2),
  trade_value DECIMAL(15, 2),
  trade_type VARCHAR(4), -- BUY/SELL
  timestamp TIMESTAMP
);

-- Dimension Table
CREATE TABLE dim_stocks (
  stock_id INT PRIMARY KEY,
  symbol VARCHAR(20),
  company_name VARCHAR(100),
  sector VARCHAR(50),
  industry VARCHAR(50),
  market_cap BIGINT
);

CREATE TABLE dim_time (
  time_id INT PRIMARY KEY,
  date DATE,
  day_of_week VARCHAR(10),
  month VARCHAR(10),
  quarter INT,
  year INT,
  is_trading_day BOOLEAN
);
```

**ETL Process:**

```javascript
// Daily ETL job
async function dailyETL() {
  // Extract
  const trades = await extractTrades(yesterday);
  const users = await extractUsers();
  const stocks = await extractStocks();
  
  // Transform
  const transformedTrades = trades.map(trade => ({
    ...trade,
    trade_value: trade.quantity * trade.price,
    time_id: getTimeId(trade.timestamp)
  }));
  
  // Load
  await bulkInsert('fact_trades', transformedTrades);
  
  // Aggregate calculations
  await calculateDailyMetrics();
}

async function calculateDailyMetrics() {
  // Daily trading volume per stock
  await db.query(`
    INSERT INTO daily_stock_metrics
    SELECT 
      stock_id,
      date,
      SUM(quantity) as volume,
      MAX(price) as high,
      MIN(price) as low,
      FIRST_VALUE(price) as open,
      LAST_VALUE(price) as close
    FROM fact_trades
    WHERE date = CURRENT_DATE - 1
    GROUP BY stock_id, date
  `);
}
```

**Analytics Queries:**

```sql
-- Top traded stocks by volume
SELECT 
  s.symbol,
  s.company_name,
  SUM(f.quantity) as total_volume,
  SUM(f.trade_value) as total_value
FROM fact_trades f
JOIN dim_stocks s ON f.stock_id = s.stock_id
JOIN dim_time t ON f.time_id = t.time_id
WHERE t.year = 2024 AND t.month = 'January'
GROUP BY s.symbol, s.company_name
ORDER BY total_volume DESC
LIMIT 10;

-- User trading patterns
SELECT 
  u.user_id,
  COUNT(DISTINCT f.trade_id) as num_trades,
  AVG(f.trade_value) as avg_trade_size,
  SUM(CASE WHEN f.trade_type = 'BUY' THEN 1 ELSE 0 END) as buy_trades,
  SUM(CASE WHEN f.trade_type = 'SELL' THEN 1 ELSE 0 END) as sell_trades
FROM fact_trades f
JOIN dim_users u ON f.user_id = u.user_id
GROUP BY u.user_id
HAVING COUNT(*) > 100
ORDER BY num_trades DESC;
```

**BI Layer:**
- Tableau/Power BI dashboards
- Predefined reports (daily, weekly, monthly)
- Ad-hoc query interface for analysts
- Automated report generation and distribution

---

**Q23: How would you handle millions of concurrent WebSocket connections?**

**A:** Scaling WebSocket infrastructure:

**Architecture:**

1. **Load Balancer Layer:**
   - AWS ALB or nginx with sticky sessions
   - Route connections based on user ID hash
   - Health checks for WebSocket servers

2. **WebSocket Server Farm:**
   - Multiple Socket.io servers (Node.js cluster)
   - Each server handles 10-50K connections
   - Horizontal scaling based on load

3. **Redis Pub/Sub:**
```javascript
// Server 1
io.adapter(createAdapter(pubClient, subClient));

// When user on Server 1 sends message
socket.on('message', async (data) => {
  // Publish to Redis
  await redisPublisher.publish('chat:messages', JSON.stringify({
    roomId: data.roomId,
    message: data.message,
    userId: socket.userId
  }));
});

// All servers subscribe to Redis channel
redisSubscriber.subscribe('chat:messages');
redisSubscriber.on('message', (channel, data) => {
  const { roomId, message, userId } = JSON.parse(data);
  // Emit to local connections in this room
  io.to(roomId).emit('message', { message, userId });
});
```

4. **Connection Management:**
```javascript
// Track connections per server
const connectionRegistry = {
  serverId: process.env.SERVER_ID,
  connections: new Map(), // socketId -> userId
  
  add(socketId, userId) {
    this.connections.set(socketId, userId);
    // Store in Redis for cross-server lookup
    redis.sadd(`server:${this.serverId}:users`, userId);
    redis.hset(`user:${userId}`, 'serverId', this.serverId);
  },
  
  remove(socketId) {
    const userId = this.connections.get(socketId);
    this.connections.delete(socketId);
    redis.srem(`server:${this.serverId}:users`, userId);
    redis.hdel(`user:${userId}`, 'serverId');
  },
  
  async findUserServer(userId) {
    return await redis.hget(`user:${userId}`, 'serverId');
  }
};
```

5. **Performance Optimization:**
   - Binary protocol for less overhead
   - Compression for messages
   - Connection pooling
   - Message batching

6. **Monitoring:**
```javascript
setInterval(() => {
  const metrics = {
    serverId: process.env.SERVER_ID,
    connections: io.engine.clientsCount,
    rooms: io.sockets.adapter.rooms.size,
    memory: process.memoryUsage(),
    uptime: process.uptime()
  };
  
  // Send to monitoring system
  sendMetrics(metrics);
  
  // Alert if connections > threshold
  if (metrics.connections > 45000) {
    alert('High connection count');
  }
}, 60000); // Every minute
```

**Capacity Planning:**
- 1 server: 10-50K connections (depending on message rate)
- 100 servers: 1-5M connections
- Auto-scaling based on connection count
- Reserve capacity for peak hours

---

**Q24: Design a real-time risk management system.**

**A:** Monitor and prevent risky trading behavior in real-time.

**Components:**

1. **Risk Rules Engine:**
```javascript
const riskRules = [
  {
    name: 'Single Order Limit',
    check: (order, user) => {
      const maxOrderValue = user.tier === 'PREMIUM' ? 1000000 : 100000;
      return order.quantity * order.price <= maxOrderValue;
    },
    action: 'REJECT',
    message: 'Order value exceeds limit'
  },
  {
    name: 'Daily Trading Limit',
    check: async (order, user) => {
      const todayVolume = await getTodayTradingVolume(user.id);
      return todayVolume + (order.quantity * order.price) <= user.dailyLimit;
    },
    action: 'REJECT',
    message: 'Daily trading limit exceeded'
  },
  {
    name: 'Position Limit',
    check: async (order, user) => {
      const currentPosition = await getPosition(user.id, order.symbol);
      const newPosition = currentPosition + order.quantity;
      const maxPosition = await getMaxPosition(order.symbol);
      return Math.abs(newPosition) <= maxPosition;
    },
    action: 'WARN',
    message: 'High position concentration'
  },
  {
    name: 'Rapid Trading Detection',
    check: async (order, user) => {
      const recentOrders = await getRecentOrders(user.id, 60000); // Last minute
      return recentOrders.length < 10; // Max 10 orders per minute
    },
    action: 'THROTTLE',
    message: 'Too many orders in short time'
  }
];

async function validateOrder(order, user) {
  const violations = [];
  
  for (const rule of riskRules) {
    const passed = await rule.check(order, user);
    if (!passed) {
      violations.push({
        rule: rule.name,
        action: rule.action,
        message: rule.message
      });
    }
  }
  
  return {
    allowed: violations.filter(v => v.action === 'REJECT').length === 0,
    violations
  };
}
```

2. **Real-Time Monitoring:**
```javascript
// Stream processing with Kafka
const orderStream = kafka.consumer({ groupId: 'risk-monitor' });

orderStream.subscribe({ topic: 'orders' });

orderStream.run({
  eachMessage: async ({ message }) => {
    const order = JSON.parse(message.value);
    
    // Calculate real-time metrics
    await updateUserMetrics(order.userId, {
      orderCount: { $inc: 1 },
      totalVolume: { $inc: order.value },
      lastOrderTime: order.timestamp
    });
    
    // Check for anomalies
    const anomaly = await detectAnomaly(order);
    if (anomaly) {
      await alertRiskTeam(anomaly);
      
      if (anomaly.severity === 'HIGH') {
        await freezeAccount(order.userId);
      }
    }
  }
});
```

3. **Anomaly Detection:**
```javascript
async function detectAnomaly(order) {
  const user = await User.findById(order.userId);
  const history = await getUserTradingHistory(order.userId, 30); // 30 days
  
  // Statistical analysis
  const avgOrderValue = mean(history.map(o => o.value));
  const stdDev = standardDeviation(history.map(o => o.value));
  
  // Z-score: how many standard deviations from mean
  const zScore = (order.value - avgOrderValue) / stdDev;
  
  if (Math.abs(zScore) > 3) {
    return {
      type: 'UNUSUAL_ORDER_SIZE',
      severity: 'HIGH',
      order,
      user,
      details: `Order value ${order.value} is ${zScore.toFixed(2)} std devs from user average`
    };
  }
  
  // Pattern detection
  const recentOrders = history.slice(-10);
  const allSameStock = recentOrders.every(o => o.symbol === order.symbol);
  if (allSameStock && recentOrders.length >= 5) {
    return {
      type: 'REPEATED_STOCK_TRADING',
      severity: 'MEDIUM',
      details: 'User trading same stock repeatedly'
    };
  }
  
  return null;
}
```

4. **Dashboard:**
   - Real-time risk metrics
   - Alert visualization
   - User risk profiles
   - Historical violation trends

---

**Q25: Design a notification system for trade confirmations.**

**A:** Multi-channel notification with guaranteed delivery.

**Architecture:**

```javascript
class NotificationService {
  constructor() {
    this.channels = {
      email: new EmailChannel(),
      sms: new SMSChannel(),
      push: new PushChannel(),
      inApp: new InAppChannel()
    };
    
    this.queue = new Queue('notifications');
  }
  
  async sendTradeConfirmation(trade) {
    const user = await User.findById(trade.userId);
    
    // Create notification
    const notification = {
      id: generateId(),
      userId: trade.userId,
      type: 'TRADE_CONFIRMATION',
      priority: 'HIGH',
      channels: user.notificationPreferences,
      data: {
        orderId: trade.orderId,
        symbol: trade.symbol,
        quantity: trade.quantity,
        price: trade.price,
        side: trade.side,
        timestamp: trade.timestamp
      },
      retries: 0,
      maxRetries: 3
    };
    
    // Add to queue for async processing
    await this.queue.add(notification);
    
    // Also send critical notification immediately
    if (notification.priority === 'HIGH') {
      await this.sendImmediate(notification);
    }
  }
  
  async sendImmediate(notification) {
    const promises = notification.channels.map(channel => {
      return this.channels[channel].send(notification)
        .catch(err => {
          console.error(`${channel} notification failed:`, err);
          // Log failure but don't throw
        });
    });
    
    await Promise.allSettled(promises);
  }
  
  async processQueue() {
    this.queue.process(async (job) => {
      const notification = job.data;
      
      try {
        await this.sendImmediate(notification);
        
        // Mark as delivered
        await Notification.updateOne(
          { id: notification.id },
          { status: 'DELIVERED', deliveredAt: new Date() }
        );
      } catch (error) {
        notification.retries++;
        
        if (notification.retries < notification.maxRetries) {
          // Retry with exponential backoff
          const delay = Math.pow(2, notification.retries) * 1000;
          await this.queue.add(notification, { delay });
        } else {
          // Max retries exceeded
          await Notification.updateOne(
            { id: notification.id },
            { status: 'FAILED', error: error.message }
          );
          
          // Alert operations team
          await alertOps('Notification delivery failed', notification);
        }
      }
    });
  }
}

// Email Channel Implementation
class EmailChannel {
  async send(notification) {
    const user = await User.findById(notification.userId);
    
    const emailTemplate = this.getTemplate(notification.type);
    const html = emailTemplate(notification.data);
    
    await emailService.send({
      to: user.email,
      subject: this.getSubject(notification.type),
      html,
      priority: notification.priority
    });
  }
  
  getTemplate(type) {
    const templates = {
      TRADE_CONFIRMATION: (data) => `
        <h2>Trade Confirmation</h2>
        <p>Your ${data.side} order has been executed:</p>
        <ul>
          <li>Stock: ${data.symbol}</li>
          <li>Quantity: ${data.quantity}</li>
          <li>Price: ₹${data.price}</li>
          <li>Total: ₹${data.quantity * data.price}</li>
        </ul>
        <p>Order ID: ${data.orderId}</p>
      `
    };
    
    return templates[type];
  }
}

// SMS Channel Implementation
class SMSChannel {
  async send(notification) {
    const user = await User.findById(notification.userId);
    const message = this.formatMessage(notification);
    
    await smsService.send({
      to: user.mobile,
      message
    });
  }
  
  formatMessage(notification) {
    const { data } = notification;
    return `Trade Alert: ${data.side} ${data.quantity} ${data.symbol} @ ₹${data.price}. Order ID: ${data.orderId}`;
  }
}

// Push Notification
class PushChannel {
  async send(notification) {
    const devices = await UserDevice.find({ userId: notification.userId });
    
    const promises = devices.map(device => 
      fcm.send({
        token: device.fcmToken,
        notification: {
          title: 'Trade Executed',
          body: this.formatPushMessage(notification)
        },
        data: notification.data
      })
    );
    
    await Promise.all(promises);
  }
}
```

**Delivery Guarantees:**
- At-least-once delivery (queue with retries)
- Idempotency keys to prevent duplicates
- Fallback channels if primary fails
- Delivery status tracking
- User acknowledgment for critical notifications

---

## Project Mapping to NSE Role

### How Your Projects Align with NSE Requirements

**1. Shares Portfolio Tracker → NSE Market Data Systems**

**Similarities:**
- Real-time data from external API (like NSE market data feeds)
- Financial calculations (P&L, portfolio value)
- Data visualization (charts for traders)
- Polling mechanism (can be upgraded to push-based)

**Interview Talking Points:**
```
"In my Portfolio Tracker, I integrated with Financial Modeling Prep API 
to fetch real-time stock prices, similar to how NSE aggregates data from 
various sources. I implemented automatic updates every 30 seconds, calculated 
profit/loss in real-time, and visualized data with HighCharts. For NSE scale, 
I would upgrade to WebSocket-based push model with message queues for 
handling millions of price updates per second."
```

**2. Zerodha Clone → NSE Trading Platform**

**Similarities:**
- Trading platform UI/UX
- Order management concepts
- Multi-application architecture
- Enterprise-grade authentication
- Security best practices

**Interview Talking Points:**
```
"I built a Zerodha clone to understand trading platforms from a technical 
perspective. I implemented JWT authentication with bcrypt hashing, created 
a multi-app architecture with separate frontend and dashboard, and designed 
APIs for order placement. While my implementation is educational, I understand 
the concepts that would scale to NSE - order validation, matching engines, 
settlement processes, and regulatory compliance."
```

**3. Let's Chat → NSE Real-Time Systems**

**Similarities:**
- Real-time bidirectional communication (like order book updates)
- WebSocket architecture (for live market data)
- Scalability (1000+ concurrent connections)
- Low latency (<100ms message delivery)
- Distributed systems concepts

**Interview Talking Points:**
```
"Let's Chat demonstrates my ability to build real-time systems. I achieved 
sub-100ms message delivery using Socket.io, handled 1000+ concurrent 
connections, and implemented automatic reconnection. NSE requires similar 
real-time capabilities for order book updates, trade notifications, and 
market data dissemination. My experience with WebSockets, event-driven 
architecture, and optimistic UI updates directly translates to building 
NSE's real-time trading infrastructure."
```

---

## Behavioral Questions

**Q26: Why do you want to join NSE?**

**A:** "NSE is India's premier stock exchange and a leader in financial technology innovation. I'm excited about the opportunity to work on systems that impact millions of traders daily and contribute to India's financial ecosystem. My background in building real-time applications, financial systems, and scalable architectures aligns perfectly with NSE's technology needs.

Specifically, I'm attracted to:
1. **Scale**: Working on systems handling millions of transactions daily
2. **Impact**: Building tools that democratize stock market access
3. **Learning**: Exposure to cutting-edge financial technology
4. **Innovation**: Being part of NSE's continuous technology evolution

My projects demonstrate my passion for financial technology - I built a portfolio tracker and trading platform clone because I'm genuinely interested in how markets work. I want to take that passion and apply it at NSE, contributing to mission-critical systems while growing as an engineer."

---

**Q27: How do you handle working on legacy code?**

**A:** "I approach legacy code with respect - it's running production systems successfully. My strategy:

1. **Understand First**: Read code thoroughly, trace execution paths, understand business logic
2. **Documentation**: Document my understanding, create diagrams
3. **Test Coverage**: Add tests before making changes
4. **Incremental Improvements**: Small, safe refactorings
5. **Ask Questions**: Learn from engineers who know the codebase

Example: If I needed to add a feature to NSE's existing order processing system, I would:
- Study the current implementation
- Identify integration points
- Write tests for existing behavior
- Implement feature following existing patterns
- Refactor only when necessary and safe

I believe legacy code often contains valuable business logic and domain knowledge. The goal is to enhance it thoughtfully, not replace it hastily."

---

**Q28: Describe a time you debugged a complex issue.**

**A:** "In my Let's Chat project, I encountered a race condition where messages sometimes appeared out of order or duplicated when multiple users sent messages simultaneously.

**Problem**: Optimistic UI showed messages immediately, but server responses arrived at different times, causing inconsistency.

**Investigation**:
1. Reproduced issue with rapid-fire testing
2. Added detailed logging with timestamps
3. Analyzed WebSocket message flow
4. Identified issue: No correlation between optimistic message and server confirmation

**Solution**:
1. Assigned unique temporary IDs to optimistic messages
2. Server included tempId in acknowledgment
3. Client replaced temp message with real message using tempId
4. Added timestamps for chronological ordering
5. Implemented deduplication logic

**Result**: Message consistency maintained even with 100+ concurrent users.

**Learning**: Always design for eventual consistency in distributed systems, use correlation IDs for async operations, and thoroughly test concurrent scenarios."

---

**Q29: How do you prioritize when you have multiple urgent tasks?**

**A:** "I use a systematic approach:

1. **Assess Impact**: Which task affects the most users or critical systems?
2. **Evaluate Urgency**: What are the actual deadlines?
3. **Estimate Effort**: Quick wins vs. long-term solutions
4. **Communicate**: Set expectations with stakeholders

Example priority matrix:
```
High Impact + Urgent: Production outage → DO FIRST
High Impact + Not Urgent: Performance optimization → SCHEDULE
Low Impact + Urgent: Minor UI bug → QUICK FIX
Low Impact + Not Urgent: Code refactoring → BACKLOG
```

**NSE Context**: If I had to choose between:
- A: Trading system bug affecting 100 users
- B: New feature request from management
- C: Database optimization for reports

I'd prioritize A (immediate user impact), then C (prevents future issues), then B (can be scheduled).

I also believe in asking for help when truly overwhelmed - two engineers can parallelize urgent tasks better than one trying to do everything."

---

**Q30: What interests you about the financial domain?**

**A:** "I'm fascinated by the intersection of finance and technology. Markets are complex systems where technology enables price discovery, capital allocation, and economic growth.

**What excites me**:
1. **Real-time Systems**: Markets operate in real-time with strict latency requirements
2. **Scale**: Handling millions of transactions daily
3. **Accuracy**: Zero tolerance for errors in financial calculations
4. **Regulation**: Working within compliance frameworks
5. **Innovation**: Algorithmic trading, blockchain, AI in finance

**My Learning Journey**:
- Built portfolio tracker to understand market data and analytics
- Created trading platform clone to learn order management
- Studied financial concepts: order types, settlement, clearing
- Follow market technology trends: HFT, smart order routing, DeFi

**At NSE**, I see opportunity to deepen this knowledge while building systems that millions of Indians depend on for their financial futures. The combination of challenging technology problems and meaningful social impact is what drives my interest in FinTech."

---

## Questions to Ask NSE Interviewers

1. **Technical Architecture:**
   - "What technology stack does NSE use for the trading platform?"
   - "How do you handle peak loads during market opening hours?"
   - "What's the architecture of NSE's matching engine?"

2. **Team & Growth:**
   - "What does the typical career progression look like for this role?"
   - "How is the ADM team structured?"
   - "What learning and development opportunities does NSE provide?"

3. **Projects:**
   - "What projects would I work on in the first 6 months?"
   - "How does NSE approach technical innovation?"
   - "Are there opportunities to work on newer technologies like blockchain?"

4. **Culture:**
   - "How does NSE maintain work-life balance during critical periods?"
   - "What's the code review and collaboration process like?"
   - "How does NSE celebrate technical achievements?"

5. **Impact:**
   - "How does this role contribute to NSE's strategic goals?"
   - "What are the biggest technical challenges NSE is solving currently?"

---

## Final Preparation Checklist

### Technical Preparation
- [ ] Review all three projects thoroughly
- [ ] Practice explaining architectures on whiteboard
- [ ] Revise data structures and algorithms
- [ ] Study financial domain basics
- [ ] Practice coding problems on LeetCode (Easy & Medium)
- [ ] Understand distributed systems concepts
- [ ] Review database optimization techniques

### Behavioral Preparation
- [ ] Prepare STAR format answers for common questions
- [ ] Practice explaining projects in 2 minutes
- [ ] Prepare questions to ask interviewers
- [ ] Review NSE website and recent news
- [ ] Prepare "Why NSE?" answer
- [ ] Think about career goals

### Day Before Interview
- [ ] Test video/audio for online interview
- [ ] Prepare laptop with projects ready to demo
- [ ] Review this document one final time
- [ ] Get good sleep
- [ ] Prepare professional attire

### During Interview
- [ ] Listen carefully to questions
- [ ] Ask clarifying questions if needed
- [ ] Think aloud during problem-solving
- [ ] Use examples from your projects
- [ ] Be honest about what you don't know
- [ ] Show enthusiasm for learning
- [ ] Take notes during interviewer's explanations

---

**Remember**: You have built three production-ready applications demonstrating full-stack expertise. You understand real-time systems, scalable architecture, and financial domain basics. Be confident, be yourself, and let your work speak for you!

**Good luck with your NSE interview! 🚀**