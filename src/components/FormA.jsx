import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { completeTask } from '../api/camunda'; // فرض بر این است که متد کامل کردن تسک اینجاست

export default function FormA() {
  const [params] = useSearchParams();
  const taskId = params.get('taskId');

  const callbackUrl = params.get('callbackUrl') ;

  const [approved, setApproved] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await completeTask(taskId, {
      approved: { value: approved, type: 'Boolean' },
    });

    // چند لحظه صبر کن تا تسک جدید ایجاد بشه
    setTimeout(async () => {
      const res = await fetch('/engine-rest/task?assignee=demo');
      const tasks = await res.json();

      // تسک جدیدی که متفاوت از تسک فعلی است
      const nextTask = tasks.find(t => t.id !== taskId);

      if (nextTask) {
        const formPath = nextTask.formKey?.replace('http://localhost:5173/', '') || 'formA';
        window.location.href = `/${formPath}?taskId=${nextTask.id}&callbackUrl=${callbackUrl}`;
      } else {
        // اگر تسکی پیدا نشد برگرد به Cockpit یا پیغام بده
        window.location.href = callbackUrl;
      }
    }, 500); // نیم ثانیه تأخیر
  } catch (err) {
    console.error('خطا در ارسال فرم:', err);
    alert('خطایی رخ داد. لطفا دوباره تلاش کنید.');
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <h2>فرم A</h2>
      <label>
        تایید:
        <input
          type="checkbox"
          checked={approved}
          onChange={(e) => setApproved(e.target.checked)}
        />
      </label>
      <br />
      <button type="submit">ارسال</button>
    </form>
  );
}
