import { Pool } from "pg";

const pool = new Pool({
    user: 'postgres',
    host: 'procom-test-db.cm7ddvuybl4r.us-east-2.rds.amazonaws.com',
    database: 'procom-test-db',
    password: '',
    port: 5432
});
  
export default pool