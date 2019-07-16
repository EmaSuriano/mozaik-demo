const createProjectManager = require('./src/ProjectManager');
require('dotenv').load();

const PM = createProjectManager();

const config = {
  env: 'prod',
  host: '0.0.0.0',
  port: process.env.PORT || 5000,
  theme: 'snow',
  api: {},
  rotationDuration: 8000,
  apisPollInterval: 15000,
  dashboards: [
    {
      columns: 4,
      rows: 3,
      widgets: [
        {
          type: 'github.user_badge',
          user: 'EmaSuriano',
          columns: 1,
          rows: 1,
          x: 0,
          y: 0,
        },
        ...PM.addProject('gatsby-starter-mate'),
        ...PM.addProject('gatsby-starter-mate'),
        ...PM.addProject('gatsby-starter-mate'),
      ],
    },
  ],
};

module.exports = config;
