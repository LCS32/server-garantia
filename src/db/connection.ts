import { Sequelize } from "sequelize";

const sequelize = new Sequelize('garantias', 'root', 'chorvi', {
    host: 'chorvi.duckdns.org',
    dialect: "mysql",
    port: 2305,
    // logging: false, hace de desaparezca SELECT 1+1 AS result
    
}) ;

export default sequelize;