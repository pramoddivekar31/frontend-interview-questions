class TokenBucket {
  constructor(capacity, refillRate) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillRate = refillRate;
    this.lastRefillTime = Date.now();

    // Start a periodic refill process
    this.refillInterval = setInterval(() => {
      this.refill();
    }, 1000 / refillRate);
  }

  refill() {
    const now = Date.now();
    const timePassed = (now - this.lastRefillTime) / 1000;
    const tokensToAdd = timePassed * this.refillRate;

    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);

    this.lastRefillTime = now;
  }

  tryConsume(tokens) {
    if (tokens <= this.tokens) {
      this.tokens -= tokens;
      return true; // Request is allowed
    } else {
      return false; // Request is denied
    }
  }

  stopRefill() {
    clearInterval(this.refillInterval);
  }
}

// Example usage
const rateLimiter = new TokenBucket(10, 1); // 10 tokens capacity, 2 tokens per second

const rateLimitElement = document.getElementById("rate-limit");

rateLimitElement.addEventListener("click", () => {
  if (rateLimiter.tryConsume(1)) {
    console.log("Request allowed");
  } else {
    console.log("Status Code - 429: To Many Requests");
  }
});

// function handleRequest() {
//   if (rateLimiter.tryConsume(1)) {
//     console.log("Request allowed");
//   } else {
//     console.log("Request denied");
//   }
// }

// // Test with multiple requests
// for (let i = 0; i < 15; i++) {
//   setTimeout(handleRequest, i * 1000); // Delayed requests to observe token usage
// }

// // Stop the refill process after some time (optional)
// setTimeout(() => {
//   rateLimiter.stopRefill();
// }, 10000);
