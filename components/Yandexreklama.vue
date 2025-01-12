<template>
  <div ref="adBlock"></div>
</template>

<script>
export default {
  props: {
    blockId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'floorAd', // По умолчанию "floorAd", но можно изменить
    },
    platform: {
      type: String,
      default: 'touch', // Укажите "touch" или "desktop"
    },
  },
  mounted() {
    if (typeof window !== 'undefined' && window.yaContextCb) {
      window.yaContextCb.push(() => {
        Ya.Context.AdvManager.render({
          blockId: this.blockId,
          type: this.type,
          platform: this.platform,
        });
      });
    }
  },
};
</script>
