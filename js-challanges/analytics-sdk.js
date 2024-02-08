// Atlassian

class AnalyticsSdk {
  constructor() {
    this.analyticsQueue = [];
    this.count = 1;
  }

  static instance = null;

  static getInstance() {
    if (!AnalyticsSdk.instance) {
      AnalyticsSdk.instance = new AnalyticsSdk();
    }

    return AnalyticsSdk.instance;
  }

  logEvent(event) {
    this.analyticsQueue.push(event);
  }

  async delay() {
    return new Promise((resolve, reject) => {
      setTimeout(() => (this.count % 5 === 0 ? reject() : resolve()), 1000);
    });
  }

  async sendAnalytics() {
    while (this.analyticsQueue.length > 0) {
      // const batch = this.analyticsQueue.splice(0, 3); // Take the next 3 events.
      // for (const event of batch) {
      const event = this.analyticsQueue.shift();

      try {
        await this.delay(); // Wait for 5 seconds after processing the batch.
        console.log("SUCCESS: Sending Event " + event);
        this.count++;
      } catch (err) {
        console.log("FAIL: Sending Event Failed " + event);
        console.log("RETRY: Sending Event Failed " + event);
        this.analyticsQueue.unshift(event);
        this.count = 1;
      }
      // }
    }
  }

  send() {
    this.sendAnalytics();
  }
}

// export default AnalyticsSdk;

const sdk = new AnalyticsSdk();

sdk.logEvent("event 1");
sdk.logEvent("event 2");
sdk.logEvent("event 3");
sdk.logEvent("event 4");
sdk.logEvent("event 5");
sdk.logEvent("event 6");
sdk.logEvent("event 7");
sdk.logEvent("event 8");
sdk.logEvent("event 9");
sdk.logEvent("event 10");

sdk.send();
