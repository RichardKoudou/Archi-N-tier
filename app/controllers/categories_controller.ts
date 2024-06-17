import type { HttpContext } from '@adonisjs/core/http';
import Category from '#models/category'

export default class CategoriesController {
  public async index({ response }: HttpContext) {
    const categories = await Category.all()
    return response.json({
      success: true,
      data: categories,
    })
  }

  public async store({ request, response }: HttpContext) {
    const categoryData = request.only(['name'])
    const category = await Category.create(categoryData)
    return response.status(201).json({
      success: true,
      data: category,
    })
  }

  public async show({ params, response }: HttpContext) {
    try {
      const category = await Category.findOrFail(params.id)
      return response.json({
        success: true,
        data: category,
      })
    } catch (error) {
      return response.status(404).json({
        success: false,
        message: 'Category not found',
      })
    }
  }

  public async update({ params, request, response }: HttpContext) {
    try {
      const category = await Category.findOrFail(params.id)
      category.merge(request.only(['name']))
      await category.save()
      return response.json({
        success: true,
        data: category,
      })
    } catch (error) {
      return response.status(404).json({
        success: false,
        message: 'Category not found',
      })
    }
  }

  public async destroy({ params, response }: HttpContext) {
    try {
      const category = await Category.findOrFail(params.id)
      await category.delete()
      return response.json({
        success: true,
        message: 'Category deleted successfully',
      })
    } catch (error) {
      return response.status(404).json({
        success: false,
        message: 'Category not found',
      })
    }
  }
}
