/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import CategoriesController from '#controllers/categories_controller';
import StocksController from '#controllers/stocks_controller';
//import UserController from '#controllers/UserController';

router.on('/').render('pages/home')

// Routes pour les catégories
router.group(() => {
    router.get('/all', '#controllers/categories_controller.index') // Afficher toutes les catégories
    router.post('/create', '#controllers/categories_controller.store') // Créer une nouvelle catégorie
    router.get('/:id', '#controllers/categories_controller.show') // Afficher une catégorie spécifique
    router.put('/:id', '#controllers/categories_controller.update') // Mettre à jour une catégorie
    router.delete('/:id', '#controllers/categories_controller.destroy') // Supprimer une catégorie
  }).prefix('categories')


router.group(() => {
    router.get('/all', '#controllers/stocks_controller.index') // Afficher tous les stocks
    router.post('/create', '#controllers/stocks_controller.store') // Créer un nouveau stock
    router.get('/:id', '#controllers/stocks_controller.show') // Afficher un stock spécifique
    router.put('/:id', '#controllers/stocks_controller.update') // Mettre à jour un stock
    router.delete('/:id', '#controllers/stocks_controller.destroy') // Supprimer un stock
  }).prefix('stocks')