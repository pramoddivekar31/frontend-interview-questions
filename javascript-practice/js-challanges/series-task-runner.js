function task(cb) {
  const value = Math.random() * 1000;
  setTimeout(() => {
    cb(value);
  }, value);
}

const tasksList = [task, task, task, task, task];

function executeTasksInSeries(tasks, finalCallback) {
  let currentIndex = 0;
  const results = [];

  const taskCallback = (value) => {
    results[currentIndex++] = value;
    executeNextTask(tasks[currentIndex]);
  };

  const executeNextTask = (currentTask) => {
    if (currentIndex === tasks.length) {
      finalCallback(results);
      return;
    }

    currentTask(taskCallback);
  };

  executeNextTask(tasks[0]);
}

executeTasksInSeries(tasksList, (result) => console.log(result));
