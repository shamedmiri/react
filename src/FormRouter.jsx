import { useEffect, useState } from 'react';
import { fetchTasks, claimTask, completeTask } from './api/camunda';
import FormA from './components/FormA';
import FormB from './components/FormB';
import InputData from './components/InputData';
export default function FormRouter({ userId }) {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTask = async () => {
  setLoading(true);
  setError(null);
  try {
    const tasks = await fetchTasks(userId);
    if (tasks.length > 0) {
      const t = tasks[0];
      // فقط اگر تسک هنوز assign نشده، claim کن
      //if (!t.assignee) {
        await claimTask(t.id, userId);
     // }

      setTask(t);
    } else {
      setTask(null);
    }
  } catch (e) {
    setError(e.message);
    setTask(null);
  }
  setLoading(false);
};


  useEffect(() => {
    loadTask();
  }, []);

  const handleComplete = async (taskId, variables) => {
    try {
      await completeTask(taskId, variables);
      await loadTask(); // بارگذاری تسک بعدی پس از تکمیل تسک فعلی
    } catch (e) {
      setError(e.message);
    }
  };

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;
  if (!task) return <p>تسک فعالی وجود ندارد.</p>;

  const formKey = task.formKey || task.name.toLowerCase();

  if (formKey.endsWith('formA')) return <FormA taskId={task.id} onComplete={handleComplete} />;
  if (formKey.endsWith('formB')) return <FormB taskId={task.id} onComplete={handleComplete} />;
if (formKey.endsWith('InputData')) return <InputData taskId={task.id} onComplete={handleComplete} />;
  return <p>فرم برای این تسک تعریف نشده است: </p>;
}
