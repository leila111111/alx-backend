import { expect } from "chai";
import createPushNotificationsJobs from "./8-job.js";
import { createQueue } from 'kue';

const queue = createQueue();

describe("createPushNotificationsJobs", () => {
  before(() => {
    queue.testMode.enter();
  });

  after(() => {
    queue.testMode.clear();
    queue.testMode.exit();
  });

  it("display a error message if jobs is not an array", () => {
    expect(() => createPushNotificationsJobs(209, queue)).to.throw(
      "Jobs is not an array"
    );
  });
  it("create jobs to the queue", () => {
    queue.createJob("Job1", { message: "123" }).save();
    queue.createJob("Job2", { message: "124" }).save();

    console.log("Actual data:", queue.testMode.jobs[0].data);

    expect(queue.testMode.jobs.length).to.equal(2);
    expect(queue.testMode.jobs[0].data).to.deep.equal({ message: "123" });
    expect(queue.testMode.jobs[0].type).to.equal("Job1");

    expect(queue.testMode.jobs[1].data).to.deep.equal({ message: "124" });
    expect(queue.testMode.jobs[1].type).to.equal("Job2");
  });
});
