export async function createQuiz(data) {
    const response = await fetch(`http://localhost:3000/quizzes`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userId: data.userId,
            title: data.title,
            description: data.description,
            questions: data.questions,
            image: data.image,
        })
      })
    return await response.text();
}

export async function getAllQuizzes() {
    const response = await fetch('http://localhost:3000/quizzes');
    return await response.text();
}

export async function getQuiz(id) {
    const response = await fetch(`http://localhost:3000/quizzes/${id}`)
    return await response.text();
}

export async function editQuiz(data) {
    const response = await fetch(`http://localhost:3000/quizzes`, {
        method: 'UPDATE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userId: data.userId,
            title: data.title,
            description: data.description,
            questions: data.questions,
            image: data.image,
        })
      })
    return await response.text();
}