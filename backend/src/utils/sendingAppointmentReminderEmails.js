import schedule from 'node-schedule';

export default function sendReminders() {

  // Schedule ejecutando callback cada 10 seg
  schedule.scheduleJob('*/10 * * * * *', async () => {
    console.log('schedule funcionando');
  });
}
