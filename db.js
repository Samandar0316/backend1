const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
    connectionString: `postgresql://networking:RsXFyD8JTjrnk8kpohXgXHSYHcE0Cyp8@dpg-d0u8fsumcj7s739e9c4g-a.oregon-postgres.render.com/networking_3ml7`,
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = pool;