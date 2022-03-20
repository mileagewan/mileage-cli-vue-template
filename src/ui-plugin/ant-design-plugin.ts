import { Button, message } from 'ant-design-vue';
import { VueConstructor } from 'vue';

const components = [
  Button,
  message,
];

export const install = (vue: VueConstructor) => {
  components.forEach((c: any) => {
    vue.use(c);
  });
};
