export async function getAllQuizzes() {
    const response = await fetch('http://localhost:3000/quizzes');
    return await response.text();
    // return await response.json();
}

export async function createQuiz(data) {
    const response = await fetch(`http://localhost:3000/quizzes`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            UserId: data.userId,
            title: data.title,
            description: data.description,
            questions: data.questions,
            image: data.image,
        })
      })
    return await response.text();
    // return await response.json();
}