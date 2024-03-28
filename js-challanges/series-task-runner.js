// Angel One

function task(cb) {
  const value = Math.random() * 1000;
  setTimeout(() => {
    cb(value);
  }, Math.random() * 1000);
}

const taskList = [task, task, task, task, task];

// Implementation 1
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

executeTasksInSeries(taskList, (result) => console.log(result));

// Implementation 2
const logger = (value) => (cb) => setTimeout(cb, Math.random() * 1000, value);

const loggerList = [logger(1), logger(2), logger(3), logger(4), logger(5)];

const executeTasksInSeries2 = (taskList, finalCb) => {
  const executeSeriesTasks = (taskList, index = 0, result = []) => {
    if (index >= taskList.length) return finalCb(result);

    taskList[index]((value) => {
      executeSeriesTasks(taskList, ++index, [...result, value]);
    });
  };

  executeSeriesTasks(taskList);
};

executeTasksInSeries2(loggerList, (result) => console.log(result));
