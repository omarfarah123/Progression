const newFormHandler = async (event) => {
    event.preventDefault();
  
    const course_title = document.querySelector('#course-title').value.trim();
    
    if (course_title) {
      const response = await fetch(`/api/courses`, {
        method: 'POST',
        body: JSON.stringify({course_title}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create course');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/courses/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/courses');
      } else {
        alert('Failed to delete courses');
      }
    }
  };
  
  document
    .querySelector('.new-course-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.course-list')
    .addEventListener('click', delButtonHandler);
  