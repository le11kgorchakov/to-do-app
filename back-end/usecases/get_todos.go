package usecases

import "github.com/le11kgorchakov/to-do-app/back-end/entities"

func GetTodos(repo TodosRepository) ([]entities.Todo, error) {
	todos, err := repo.GetAllTodos()
	if err != nil {
		return nil, ErrInternal
	}
	return todos, nil
}
