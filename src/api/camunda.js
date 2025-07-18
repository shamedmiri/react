

const BASE_URL = 'http://localhost:8081/engine-rest';

export async function fetchTasks(assignee) {
  const res = await fetch(`/engine-rest/task?assignee=${assignee}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('demo:demo')
    }
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to fetch tasks: ${res.status} - ${text}`);
  }

  return res.json();
}


export async function claimTask(taskId, userId) {
  const res = await fetch(`/engine-rest/task/${taskId}/claim`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('demo:demo') // نام کاربری و رمز عبور باید کامل باشه
    },
    body: JSON.stringify({ userId }) // userId به صورت پارامتر ارسالی
  });

  if (!res.ok) {
    const errorText = await res.text(); // خطای دقیق‌تر
    throw new Error(`Failed to claim task: ${errorText}`);
  }
}
export async function completeTask(taskId, variables) {
  const res = await fetch(`/engine-rest/task/${taskId}/complete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('demo:demo') // اگر نیاز به احراز هویت هست
    },
    body: JSON.stringify({ variables }),
  });

  if (!res.ok) {
    const errorText = await res.text(); // نمایش خطای دقیق‌تر
    throw new Error(`Failed to complete task: ${res.status} - ${errorText}`);
  }
}



