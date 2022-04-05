import { Input } from 'element-ui';
import { VueConstructor } from 'vue';

const components = [
  Input,
];

export const installElement = (vue: VueConstructor) => {
  components.forEach((c: any) => {
    vue.use(c);
  });
};
