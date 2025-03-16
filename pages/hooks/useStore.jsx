import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
    persist(
        (set) => ({
            quizzes: [{ id: "quizz1", value: 10000 }, { id: "quizz2", value: 10000 },{ id: "quizz3", value: 10000 }, { id: "quizz4", value: 10000 },
                { id: "quizz5", value: 10000 }, { id: "quizz6", value: 10000 }
            ],

            addQuiz: (quiz) => set((state) => ({ quizzes: [...state.quizzes, quiz] })),

            removeQuiz: (id) =>
                set((state) => ({
                    quizzes: state.quizzes.filter((quiz) => quiz.id !== id),
                })),

            editQuiz: (updateQuiz) =>
                set((state) => ({
                    quizzes: state.quizzes.map((quiz) =>
                        quiz.id === updateQuiz.id ? updateQuiz : quiz
                    ),
                })),
        }),
        {
            name: "quiz-storage", // Key in localStorage
            storage: createJSONStorage(() => localStorage), // Use localStorage instead of sessionStorage
        }
    )
);

export default useStore;
