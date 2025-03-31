import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
    persist(
        (set,get) => ({

            quizzes: [],

            addQuiz: (quiz) => set((state) => ({ quizzes: [...state.quizzes, quiz] })),

            getQuiz: (id) => {
                return get().quizzes.find((quiz) => quiz.id == id);
            },

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
