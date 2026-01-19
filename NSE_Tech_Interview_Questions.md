# NSE (National Stock Exchange) Technical Interview Questions & Answers

## Table of Contents
- [Core Java Questions](#core-java-questions)
- [Data Structures & Algorithms](#data-structures--algorithms)
- [Database & SQL](#database--sql)
- [System Design](#system-design)
- [Financial Domain Knowledge](#financial-domain-knowledge)
- [Multithreading & Concurrency](#multithreading--concurrency)
- [Networking](#networking)
- [Operating Systems](#operating-systems)

---

## Core Java Questions

### Q1: What is the difference between HashMap and ConcurrentHashMap?
**Answer:**
- **HashMap**: Not thread-safe, allows one null key and multiple null values, faster for single-threaded applications
- **ConcurrentHashMap**: Thread-safe without synchronizing the whole map, doesn't allow null keys or values, uses lock striping for better concurrency

**Follow-up:** How does ConcurrentHashMap achieve thread safety?
**Answer:** ConcurrentHashMap divides the map into segments and locks only the segment being modified, allowing multiple threads to access different segments simultaneously.

### Q2: Explain the concept of immutability in Java with an example.
**Answer:**
Immutable objects cannot be modified after creation. String is a classic example.

**Example:**
```java
public final class ImmutableEmployee {
    private final String name;
    private final int id;
    
    public ImmutableEmployee(String name, int id) {
        this.name = name;
        this.id = id;
    }
    
    public String getName() { return name; }
    public int getId() { return id; }
}
```

**Follow-up:** Why is String immutable in Java?
**Answer:** 
1. Security - Prevents modification of sensitive data
2. Thread-safety - Can be shared between threads without synchronization
3. String pool optimization - Multiple references can point to same object
4. Hashcode caching - Immutable objects can cache their hashcode

### Q3: What are functional interfaces and lambda expressions?
**Answer:**
A functional interface has exactly one abstract method. Lambda expressions provide implementation of functional interfaces.

**Example:**
```java
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

// Lambda expression
Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;
```

**Follow-up:** What is the difference between Predicate, Function, Consumer, and Supplier?
**Answer:**
- **Predicate<T>**: Takes T, returns boolean - `test(T t)`
- **Function<T,R>**: Takes T, returns R - `apply(T t)`
- **Consumer<T>**: Takes T, returns void - `accept(T t)`
- **Supplier<T>**: Takes nothing, returns T - `get()`

---

## Data Structures & Algorithms

### Q4: Design a LRU (Least Recently Used) Cache
**Answer:**
```java
class LRUCache {
    private int capacity;
    private Map<Integer, Node> map;
    private Node head, tail;
    
    class Node {
        int key, value;
        Node prev, next;
        Node(int k, int v) { key = k; value = v; }
    }
    
    public LRUCache(int capacity) {
        this.capacity = capacity;
        map = new HashMap<>();
        head = new Node(0, 0);
        tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        Node node = map.get(key);
        remove(node);
        insert(node);
        return node.value;
    }
    
    public void put(int key, int value) {
        if (map.containsKey(key)) {
            remove(map.get(key));
        }
        if (map.size() == capacity) {
            remove(tail.prev);
        }
        insert(new Node(key, value));
    }
    
    private void remove(Node node) {
        map.remove(node.key);
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    private void insert(Node node) {
        map.put(node.key, node);
        node.next = head.next;
        node.next.prev = node;
        head.next = node;
        node.prev = head;
    }
}
```

**Follow-up:** What is the time complexity?
**Answer:** O(1) for both get and put operations due to HashMap and doubly linked list.

### Q5: Find the median of two sorted arrays
**Answer:**
```java
public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    int m = nums1.length;
    int n = nums2.length;
    int low = 0, high = m;
    
    while (low <= high) {
        int partition1 = (low + high) / 2;
        int partition2 = (m + n + 1) / 2 - partition1;
        
        int maxLeft1 = (partition1 == 0) ? Integer.MIN_VALUE : nums1[partition1 - 1];
        int minRight1 = (partition1 == m) ? Integer.MAX_VALUE : nums1[partition1];
        
        int maxLeft2 = (partition2 == 0) ? Integer.MIN_VALUE : nums2[partition2 - 1];
        int minRight2 = (partition2 == n) ? Integer.MAX_VALUE : nums2[partition2];
        
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((m + n) % 2 == 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            high = partition1 - 1;
        } else {
            low = partition1 + 1;
        }
    }
    throw new IllegalArgumentException();
}
```

**Follow-up:** What is the time complexity?
**Answer:** O(log(min(m,n))) using binary search approach.

---

## Database & SQL

### Q6: Write a query to find the second highest salary
**Answer:**
```sql
-- Method 1: Using LIMIT and OFFSET
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;

-- Method 2: Using subquery
SELECT MAX(salary)
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- Method 3: Using DENSE_RANK (handles ties better)
SELECT salary
FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank
    FROM employees
) ranked
WHERE rank = 2;
```

**Follow-up:** What if there are duplicates and you want nth highest?
**Answer:** Use DENSE_RANK() or ROW_NUMBER() window functions depending on whether you want to handle duplicates.

### Q7: Explain ACID properties with examples
**Answer:**
- **Atomicity**: All operations in a transaction succeed or all fail
  - Example: Bank transfer - debit and credit must both succeed or both fail
  
- **Consistency**: Database moves from one valid state to another
  - Example: Total balance before and after transfer remains same
  
- **Isolation**: Concurrent transactions don't interfere with each other
  - Example: Two users transferring money simultaneously see consistent data
  
- **Durability**: Committed transactions are permanent
  - Example: After commit confirmation, data survives system crashes

**Follow-up:** What are different isolation levels?
**Answer:**
1. **READ UNCOMMITTED**: Can read uncommitted changes (dirty reads)
2. **READ COMMITTED**: Only reads committed data (default in most DBs)
3. **REPEATABLE READ**: Same query returns same results within transaction
4. **SERIALIZABLE**: Highest isolation, complete transaction isolation

### Q8: Difference between DELETE, TRUNCATE, and DROP
**Answer:**
- **DELETE**: 
  - DML command
  - Can use WHERE clause
  - Can be rolled back
  - Slower (row by row deletion)
  - Triggers are fired

- **TRUNCATE**:
  - DDL command
  - Removes all rows
  - Cannot be rolled back (in most databases)
  - Faster (deallocates data pages)
  - Triggers are not fired

- **DROP**:
  - DDL command
  - Removes entire table structure
  - Cannot be rolled back
  - Removes table from database

**Follow-up:** When would you use each?
**Answer:** 
- DELETE: When you need to remove specific rows or need to rollback
- TRUNCATE: When you need to quickly remove all data but keep table structure
- DROP: When you want to remove table completely

---

## System Design

### Q9: Design a Stock Trading System
**Answer:**

**Requirements:**
- Place buy/sell orders
- Match orders based on price-time priority
- Handle high throughput (thousands of orders per second)
- Low latency (microseconds)
- Handle market data distribution

**Components:**

1. **Order Gateway**: Receives and validates orders
2. **Order Book**: Maintains buy and sell orders
3. **Matching Engine**: Matches buy/sell orders
4. **Market Data Service**: Distributes market data
5. **Risk Management**: Pre-trade and post-trade checks
6. **Settlement System**: Clears and settles trades

**Data Structures:**
```java
class OrderBook {
    TreeMap<Double, Queue<Order>> buyOrders;  // Price descending
    TreeMap<Double, Queue<Order>> sellOrders; // Price ascending
    
    public void addOrder(Order order) {
        if (order.side == Side.BUY) {
            buyOrders.computeIfAbsent(order.price, k -> new LinkedList<>()).add(order);
        } else {
            sellOrders.computeIfAbsent(order.price, k -> new LinkedList<>()).add(order);
        }
        matchOrders();
    }
    
    private void matchOrders() {
        while (!buyOrders.isEmpty() && !sellOrders.isEmpty()) {
            double highestBid = buyOrders.lastKey();
            double lowestAsk = sellOrders.firstKey();
            
            if (highestBid >= lowestAsk) {
                executeTrade(highestBid, lowestAsk);
            } else {
                break;
            }
        }
    }
}
```

**Follow-up:** How would you handle high availability?
**Answer:**
- Active-Active or Active-Passive setup
- Real-time data replication
- Circuit breakers for fault tolerance
- Message queuing for order persistence

### Q10: Design a Rate Limiter
**Answer:**

**Algorithms:**

1. **Token Bucket**:
```java
class TokenBucket {
    private long capacity;
    private long tokens;
    private long refillRate;
    private long lastRefillTime;
    
    public synchronized boolean allowRequest() {
        refill();
        if (tokens > 0) {
            tokens--;
            return true;
        }
        return false;
    }
    
    private void refill() {
        long now = System.currentTimeMillis();
        long tokensToAdd = ((now - lastRefillTime) / 1000) * refillRate;
        tokens = Math.min(capacity, tokens + tokensToAdd);
        lastRefillTime = now;
    }
}
```

2. **Sliding Window Log**:
```java
class SlidingWindowLog {
    private Queue<Long> requestLog;
    private int limit;
    private long windowSize;
    
    public synchronized boolean allowRequest() {
        long now = System.currentTimeMillis();
        
        // Remove old requests
        while (!requestLog.isEmpty() && requestLog.peek() < now - windowSize) {
            requestLog.poll();
        }
        
        if (requestLog.size() < limit) {
            requestLog.offer(now);
            return true;
        }
        return false;
    }
}
```

**Follow-up:** Which algorithm is better and why?
**Answer:** 
- Token Bucket: Better for burst traffic, more memory efficient
- Sliding Window Log: More accurate, but requires more memory
- Choice depends on use case: Token Bucket for API rate limiting, Sliding Window for strict rate enforcement

---

## Financial Domain Knowledge

### Q11: Explain Order Types in Stock Trading
**Answer:**

1. **Market Order**: Execute immediately at best available price
   - Pros: Guaranteed execution
   - Cons: Price uncertainty

2. **Limit Order**: Execute only at specified price or better
   - Buy Limit: Buy at or below limit price
   - Sell Limit: Sell at or above limit price

3. **Stop Loss Order**: Becomes market order when stop price is reached
   - Used to limit losses

4. **Stop Limit Order**: Becomes limit order when stop price is reached
   - More control than stop loss

5. **IOC (Immediate or Cancel)**: Execute immediately, cancel unfilled portion

6. **FOK (Fill or Kill)**: Execute entire order immediately or cancel

**Follow-up:** How would you implement a matching engine for these orders?
**Answer:**
- Maintain separate order books for each type
- Price-time priority for limit orders
- Immediate execution for market orders
- Trigger mechanism for stop orders
- Queue management for partial fills

### Q12: What is the difference between NSE and BSE?
**Answer:**

**NSE (National Stock Exchange):**
- Established: 1992
- First electronic exchange in India
- Technology-driven
- Higher liquidity
- NIFTY 50 index

**BSE (Bombay Stock Exchange):**
- Established: 1875
- Oldest exchange in Asia
- More listed companies
- SENSEX index

**Follow-up:** What is the role of SEBI?
**Answer:** Securities and Exchange Board of India (SEBI) is the regulatory body that:
- Protects investor interests
- Regulates stock exchanges
- Prevents fraudulent practices
- Ensures fair trading practices
- Regulates mutual funds and intermediaries

---

## Multithreading & Concurrency

### Q13: Implement a Thread-Safe Singleton
**Answer:**
```java
// Double-checked locking
public class Singleton {
    private static volatile Singleton instance;
    
    private Singleton() {}
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}

// Bill Pugh Singleton (Best approach)
public class Singleton {
    private Singleton() {}
    
    private static class SingletonHelper {
        private static final Singleton INSTANCE = new Singleton();
    }
    
    public static Singleton getInstance() {
        return SingletonHelper.INSTANCE;
    }
}

// Enum Singleton (Joshua Bloch recommendation)
public enum Singleton {
    INSTANCE;
    
    public void someMethod() {
        // method implementation
    }
}
```

**Follow-up:** Why is volatile keyword needed in double-checked locking?
**Answer:** Without volatile, due to instruction reordering, another thread might see a partially constructed object. Volatile ensures visibility and ordering guarantees.

### Q14: Explain the Producer-Consumer problem and implement it
**Answer:**
```java
class ProducerConsumer {
    private Queue<Integer> queue = new LinkedList<>();
    private int capacity = 10;
    private Object lock = new Object();
    
    class Producer implements Runnable {
        public void run() {
            int value = 0;
            while (true) {
                synchronized (lock) {
                    while (queue.size() == capacity) {
                        try {
                            lock.wait();
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    queue.offer(value++);
                    System.out.println("Produced: " + value);
                    lock.notifyAll();
                }
            }
        }
    }
    
    class Consumer implements Runnable {
        public void run() {
            while (true) {
                synchronized (lock) {
                    while (queue.isEmpty()) {
                        try {
                            lock.wait();
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    int value = queue.poll();
                    System.out.println("Consumed: " + value);
                    lock.notifyAll();
                }
            }
        }
    }
}

// Using BlockingQueue (Recommended)
class ProducerConsumerBlocking {
    private BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(10);
    
    class Producer implements Runnable {
        public void run() {
            int value = 0;
            try {
                while (true) {
                    queue.put(value++);
                    System.out.println("Produced: " + value);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
    
    class Consumer implements Runnable {
        public void run() {
            try {
                while (true) {
                    int value = queue.take();
                    System.out.println("Consumed: " + value);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
}
```

**Follow-up:** What is the difference between wait() and sleep()?
**Answer:**
- **wait()**: Releases the lock, must be called inside synchronized block
- **sleep()**: Doesn't release the lock, can be called anywhere
- **wait()**: Can be notified by notify()/notifyAll()
- **sleep()**: Wakes up after specified time

### Q15: Explain deadlock and how to prevent it
**Answer:**

**Deadlock occurs when:**
1. Mutual Exclusion
2. Hold and Wait
3. No Preemption
4. Circular Wait

**Example:**
```java
// Deadlock scenario
Thread1: synchronized(lock1) { synchronized(lock2) { ... } }
Thread2: synchronized(lock2) { synchronized(lock1) { ... } }
```

**Prevention:**
1. **Lock Ordering**: Always acquire locks in same order
```java
Thread1: synchronized(lock1) { synchronized(lock2) { ... } }
Thread2: synchronized(lock1) { synchronized(lock2) { ... } }
```

2. **Timeout**: Use tryLock() with timeout
```java
if (lock1.tryLock(50, TimeUnit.MILLISECONDS)) {
    try {
        if (lock2.tryLock(50, TimeUnit.MILLISECONDS)) {
            try {
                // critical section
            } finally {
                lock2.unlock();
            }
        }
    } finally {
        lock1.unlock();
    }
}
```

3. **Deadlock Detection**: Use ThreadMXBean to detect deadlocks

**Follow-up:** What is a livelock?
**Answer:** Threads are active but cannot make progress because they keep responding to each other. Like two people trying to pass each other in a corridor and both stepping in the same direction repeatedly.

---

## Networking

### Q16: Explain TCP vs UDP
**Answer:**

**TCP (Transmission Control Protocol):**
- Connection-oriented
- Reliable (guarantees delivery)
- Ordered delivery
- Flow control and congestion control
- Slower
- Use cases: HTTP, FTP, Email

**UDP (User Datagram Protocol):**
- Connectionless
- Unreliable (best effort delivery)
- No ordering guarantee
- No flow control
- Faster
- Use cases: Video streaming, DNS, Gaming

**Follow-up:** When would you use UDP in a trading system?
**Answer:** For market data distribution where:
- Low latency is critical
- Occasional packet loss is acceptable
- Latest data is more important than old data
- Multicast capability is needed

### Q17: Explain the three-way handshake in TCP
**Answer:**

1. **SYN**: Client sends SYN packet to server
2. **SYN-ACK**: Server responds with SYN-ACK
3. **ACK**: Client sends ACK to server

**Diagram:**
```
Client                  Server
  |                        |
  |-------- SYN ---------> |
  |                        |
  | <----- SYN-ACK ------- |
  |                        |
  |-------- ACK ---------> |
  |                        |
  |   Connection Established
```

**Follow-up:** What is the four-way handshake for connection termination?
**Answer:**
1. **FIN**: Client sends FIN
2. **ACK**: Server sends ACK
3. **FIN**: Server sends FIN
4. **ACK**: Client sends ACK

---

## Operating Systems

### Q18: Explain process vs thread
**Answer:**

**Process:**
- Independent execution unit
- Separate memory space
- Higher overhead
- Communication via IPC
- Crash doesn't affect other processes

**Thread:**
- Lightweight process
- Shares memory with other threads in same process
- Lower overhead
- Communication via shared memory
- Crash can affect entire process

**Follow-up:** What is context switching and why is it expensive?
**Answer:** Context switching is saving and loading state of processes/threads. Expensive because:
- Save CPU registers
- Save program counter
- Switch memory space (for processes)
- Invalidate CPU caches
- TLB flush

### Q19: Explain different memory allocation techniques
**Answer:**

1. **Stack Allocation**:
   - Automatic, LIFO
   - Fixed size
   - Fast
   - Local variables

2. **Heap Allocation**:
   - Dynamic, manual management
   - Variable size
   - Slower
   - Objects, dynamic arrays

3. **Static Allocation**:
   - Fixed size at compile time
   - Entire program lifetime
   - Global variables

**Follow-up:** What is memory fragmentation?
**Answer:**
- **External fragmentation**: Free memory exists but not contiguous
- **Internal fragmentation**: Allocated memory larger than requested
- **Solutions**: Compaction, paging, buddy system

### Q20: Explain different scheduling algorithms
**Answer:**

1. **FCFS (First Come First Serve)**:
   - Simple
   - Non-preemptive
   - Convoy effect

2. **SJF (Shortest Job First)**:
   - Optimal average waiting time
   - Starvation possible

3. **Round Robin**:
   - Preemptive
   - Time quantum based
   - Fair

4. **Priority Scheduling**:
   - Based on priority
   - Starvation possible (solved by aging)

5. **Multilevel Queue**:
   - Different queues for different priorities
   - Processes don't move between queues

**Follow-up:** Which algorithm would you use for a real-time trading system?
**Answer:** Priority-based preemptive scheduling with real-time constraints, ensuring critical order processing has highest priority.

---

## Additional Important Topics

### Q21: Explain CAP Theorem
**Answer:**
In a distributed system, you can have at most 2 of 3:

1. **Consistency**: All nodes see same data
2. **Availability**: System always responds
3. **Partition Tolerance**: System works despite network partitions

**Examples:**
- **CP**: MongoDB, HBase - Sacrifice availability for consistency
- **AP**: Cassandra, DynamoDB - Sacrifice consistency for availability
- **CA**: Traditional RDBMS (single node)

**Follow-up:** What is eventual consistency?
**Answer:** System will eventually become consistent after updates propagate. Used in AP systems. Example: DNS, Amazon shopping cart.

### Q22: Explain Microservices vs Monolithic Architecture
**Answer:**

**Monolithic:**
- Single deployable unit
- Easier to develop initially
- Difficult to scale
- Technology stack locked
- Single point of failure

**Microservices:**
- Multiple independent services
- Scalable independently
- Technology flexibility
- Complex deployment
- Distributed system challenges

**Follow-up:** What are the challenges in microservices?
**Answer:**
- Service discovery
- Data consistency
- Distributed transactions
- Network latency
- Monitoring and debugging
- Increased operational complexity

### Q23: Explain REST vs gRPC
**Answer:**

**REST:**
- Text-based (JSON/XML)
- HTTP/1.1
- Widely adopted
- Easy debugging
- Browser friendly

**gRPC:**
- Binary (Protocol Buffers)
- HTTP/2
- Faster
- Type-safe
- Bidirectional streaming
- Better for microservices

**Follow-up:** When would you choose gRPC over REST?
**Answer:** 
- Internal microservices communication
- Performance-critical applications
- Polyglot environments
- Real-time streaming requirements

### Q24: Explain Caching Strategies
**Answer:**

1. **Cache-Aside (Lazy Loading)**:
```java
public Data getData(String key) {
    Data data = cache.get(key);
    if (data == null) {
        data = database.get(key);
        cache.put(key, data);
    }
    return data;
}
```

2. **Write-Through**:
```java
public void putData(String key, Data data) {
    database.put(key, data);
    cache.put(key, data);
}
```

3. **Write-Behind (Write-Back)**:
```java
public void putData(String key, Data data) {
    cache.put(key, data);
    // Asynchronously write to database
    asyncWrite(key, data);
}
```

**Follow-up:** What are cache eviction policies?
**Answer:**
- LRU (Least Recently Used)
- LFU (Least Frequently Used)
- FIFO (First In First Out)
- Random Replacement
- TTL (Time To Live)

### Q25: Explain Message Queue patterns
**Answer:**

1. **Point-to-Point**:
   - One producer, one consumer
   - Message consumed once
   - Example: Order processing

2. **Pub-Sub**:
   - One producer, multiple consumers
   - Message broadcast to all subscribers
   - Example: Notifications

3. **Request-Reply**:
   - Synchronous communication
   - Correlation ID for matching
   - Example: RPC calls

**Technologies:** RabbitMQ, Kafka, ActiveMQ, AWS SQS

**Follow-up:** Kafka vs RabbitMQ - when to use which?
**Answer:**
- **Kafka**: High throughput, log aggregation, event sourcing, stream processing
- **RabbitMQ**: Traditional messaging, complex routing, lower latency for small messages

---

## Behavioral and Scenario-based Questions

### Q26: How would you optimize a slow SQL query?
**Answer:**
1. Check execution plan (EXPLAIN)
2. Add appropriate indexes
3. Avoid SELECT *
4. Use WHERE clause efficiently
5. Avoid functions in WHERE
6. Consider query rewrite
7. Check for missing statistics
8. Partition large tables
9. Use appropriate JOIN types
10. Consider materialized views

### Q27: How would you handle a production issue?
**Answer:**
1. **Assess severity** - Is it affecting users?
2. **Gather information** - Logs, metrics, error messages
3. **Isolate the problem** - Which component?
4. **Quick fix or rollback** - Restore service
5. **Root cause analysis** - Why did it happen?
6. **Permanent fix** - Code changes if needed
7. **Post-mortem** - Document and share learnings
8. **Preventive measures** - Add monitoring, alerts

### Q28: Explain your approach to learning new technologies
**Answer:**
1. Understand the problem it solves
2. Read official documentation
3. Build small proof-of-concept
4. Study best practices
5. Compare with alternatives
6. Join community forums
7. Contribute to open source
8. Share knowledge with team

---

## Tips for NSE Interview Success

1. **Strong fundamentals** in DSA, Java, and databases
2. **Financial domain knowledge** - Understand stock market basics
3. **System design** - Practice designing scalable systems
4. **Low latency** - Understand performance optimization
5. **Multithreading** - Critical for trading systems
6. **Problem-solving** - Practice coding on whiteboard
7. **Communication** - Explain your thought process clearly
8. **Ask questions** - Clarify requirements before solving

---

## Resources for Preparation

- **Books**: 
  - "Effective Java" by Joshua Bloch
  - "Designing Data-Intensive Applications" by Martin Kleppmann
  - "Java Concurrency in Practice" by Brian Goetz

- **Online Platforms**:
  - LeetCode (DSA practice)
  - System Design Primer (GitHub)
  - GeeksforGeeks (Concepts)

- **Domain Knowledge**:
  - NSE website for market structure
  - SEBI guidelines
  - FIX Protocol documentation

---

*Note: This document contains common technical interview questions for NSE and similar financial technology companies. Actual interviews may vary. Always research the specific role and team you're applying for.*

**Last Updated:** January 2025