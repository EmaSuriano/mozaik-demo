const USER = 'EmaSuriano';

const createProjectManager = () => {
  let currentLevel = 0;

  const addProject = name => {
    currentLevel++;

    return [
      {
        type: 'travis.repository',
        owner: USER,
        repository: name,
        columns: 1,
        rows: 1,
        x: 1,
        y: currentLevel,
      },
      {
        type: 'github.pull_requests',
        repository: `${USER}/${name}`,
        columns: 1,
        rows: 1,
        x: 2,
        y: currentLevel,
      },
      {
        type: 'github.issue_labels_donut',
        repository: `${USER}/${name}`,
        columns: 1,
        rows: 1,
        x: 3,
        y: currentLevel,
      },
    ];
  };

  return {
    addProject,
  };
};

module.exports = createProjectManager;
