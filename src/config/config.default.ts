import { CoolConfig } from '@cool-midway/core';
import { MidwayConfig } from '@midwayjs/core';
import { CoolCacheStore } from '@cool-midway/core';

// redis缓存
// import { redisStore } from 'cache-manager-ioredis-yet';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '138d8cb04bcc11ef88a93729a0ce3479',
  koa: {
    port: 8001,
  },
  i18n: {
    // 把你的翻译文本放到这里
    defaultLocale: 'en_US',
    localeTable: {
      en_US: {
        default: require('../locales/en_US'),
      },
      zh_CN: {
        default: require('../locales/zh_CN'),
      }
    }
  },
  // 模板渲染
  view: {
    mapping: {
      '.html': 'ejs',
    },
  },
  // 静态文件配置
  staticFile: {
    buffer: true,
  },
  // 文件上传
  upload: {
    fileSize: '200mb',
    whitelist: null,
  },
  // 缓存 可切换成其他缓存如：redis http://www.midwayjs.org/docs/extensions/caching
  cacheManager: {
    clients: {
      default: {
        store: CoolCacheStore,
        options: {
          path: 'cache',
          ttl: 0,
        },
      },
    },
  },
  // cacheManager: {
  //   clients: {
  //     default: {
  //       store: redisStore,
  //       options: {
  //         port: 6379,
  //         host: '127.0.0.1',
  //         password: '',
  //         ttl: 0,
  //         db: 0,
  //       },
  //     },
  //   },
  // },
  cool: {
    // 已经插件化，本地文件上传查看 plugin/config.ts，其他云存储查看对应插件的使用
    file: {},
    // crud配置
    crud: {
      // 插入模式，save不会校验字段(允许传入不存在的字段)，insert会校验字段
      upsert: 'save',
      // 软删除
      softDelete: true,
    },
  } as CoolConfig,
} as MidwayConfig;
