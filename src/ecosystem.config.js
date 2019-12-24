module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [

        // First application
        {
            name: 'doc', /* 应用程序名 */
            script: 'npm', /* 脚本路径 */
            args: 'start', /* 脚本参数 */
	        env: {
                /* 环境变量设置 */
                //COMMON_VARIABLE: 'true'
            },
            env_production: {
                /* 生产环境/环境变量设置 */
                NODE_ENV: 'production'
            },
            log_date_format : "YYYY-MM-DD HH:mm Z"
        },
    ],

    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy: {
        production: {
            user: 'root',
            host: '101.37.30.134',
            ref: 'origin/master',
            repo: 'git@git.iflytek.com:hdyl_lingxi_server/lx-doc.git', /* ssh://root@47.96.86.34 服务器仓库地址*/
            path: '/root/apps/program', /*  应用文件存放地址  */
            'post-deploy': 'cd service && npm install && pm2 reload ecosystem.config.js --env production'
        },
    }
};
