package usecases

import "github.com/le11kgorchakov/to-do-app/back-end/entities"

type TodosRepository interface {
	GetAllTodos() ([]entities.Todo, error)
}
