self.addEventListener('push', (event) => {
  const data = event.data.JSON();
  const { title } = data;
  const body = {
    body: data.body,
    title: data.title,
  };
  event.waitUntil(self.registration.showNotification(title, body));
});
