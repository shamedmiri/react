import React, { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { completeTask } from '../api/camunda';

function InputData() {
  const [params] = useSearchParams();
  const taskId = params.get('taskId');
  const callbackUrl = params.get('callbackUrl');

  // وضعیت ورودی‌ها
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [approved, setApproved] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ارسال اطلاعات به Camunda
      await completeTask(taskId, {
        fullName: { value: fullName, type: 'String' },
        email: { value: email, type: 'String' },
        password: { value: password, type: 'String' },
        approved: { value: approved, type: 'Boolean' }
      });

      // بررسی تسک بعدی
      setTimeout(async () => {
        const res = await fetch('/engine-rest/task?assignee=demo');
        const tasks = await res.json();
        const nextTask = tasks.find(t => t.id !== taskId);

        if (nextTask) {
          const formPath = nextTask.formKey?.replace('http://localhost:5173/', '') || 'formA';
          window.location.href = `/${formPath}?taskId=${nextTask.id}&callbackUrl=${callbackUrl}`;
        } else {
          window.location.href = callbackUrl;
        }
      }, 500);
    } catch (err) {
      console.error('خطا در ارسال فرم:', err);
      alert('خطایی رخ داد. لطفا دوباره تلاش کنید.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative flex flex-col rounded-xl text-gray-700">
        <h4 className="text-2xl font-semibold text-blue-gray-900">ثبت اطلاعات</h4>
        <p className="mt-1 text-base text-gray-700">اطلاعات زیر را تکمیل نمایید</p>

        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">

            <input
              className="rounded-md border px-3 py-2 text-sm"
              placeholder="نام و نام خانوادگی"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <input
              className="rounded-md border px-3 py-2 text-sm"
              placeholder="ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="rounded-md border px-3 py-2 text-sm"
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={approved}
                onChange={(e) => setApproved(e.target.checked)}
                className="h-4 w-4"
              />
              تایید اطلاعات
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-pink-500 py-3 px-6 text-xs font-bold uppercase text-white shadow-md hover:shadow-lg transition"
          >
            تایید و ادامه
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputData;
