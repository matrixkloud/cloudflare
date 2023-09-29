export default {
  async email(message, env, ctx) {
    await message.forward("abc@example.com");
    await message.forward("info@abc.com");
  }
}
