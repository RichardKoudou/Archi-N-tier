/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

// Routes pour les catégories
router.group(() => {
    router.get('/all', 'categories_controller.index') // Afficher toutes les catégories
    router.post('/create', 'categories_controller.store') // Créer une nouvelle catégorie
    router.get('/:id', 'categories_controller.show') // Afficher une catégorie spécifique
    router.put('/:id', 'categories_controller.update') // Mettre à jour une catégorie
    router.delete('/:id', 'categories_controller.destroy') // Supprimer une catégorie
  }).prefix('categories')


router.group(() => {
    router.get('/', 'stocks_controller.index') // Afficher tous les stocks
    router.post('/', 'stocks_controller.store') // Créer un nouveau stock
    router.get('/:id', 'stocks_controller.show') // Afficher un stock spécifique
    router.put('/:id', 'stocks_controller.update') // Mettre à jour un stock
    router.delete('/:id', 'stocks_controller.destroy') // Supprimer un stock
  }).prefix('stocks')