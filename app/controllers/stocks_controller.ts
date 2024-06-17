import type { HttpContext } from '@adonisjs/core/http';
import Stock from '#models/stock'

export default class StocksController {
    public async index({ response }: HttpContext) {
      const stocks = await Stock.all()
      return response.json({
        success: true,
        data: stocks,
      })
    }
  
    public async store({ request, response }: HttpContext) {
      const stockData = request.only(['name', 'quantity', 'price'])
      const stock = await Stock.create(stockData)
      return response.status(201).json({
        success: true,
        data: stock,
      })
    }
  
    public async show({ params, response }: HttpContext) {
      try {
        const stock = await Stock.findOrFail(params.id)
        return response.json({
          success: true,
          data: stock,
        })
      } catch (error) {
        return response.status(404).json({
          success: false,
          message: 'Stock not found',
        })
      }
    }
  
    public async update({ params, request, response }: HttpContext) {
      try {
        const stock = await Stock.findOrFail(params.id)
        stock.merge(request.only(['name', 'quantity', 'price']))
        await stock.save()
        return response.json({
          success: true,
          data: stock,
        })
      } catch (error) {
        return response.status(404).json({
          success: false,
          message: 'Stock not found',
        })
      }
    }
  
    public async destroy({ params, response }: HttpContext) {
      try {
        const stock = await Stock.findOrFail(params.id)
        await stock.delete()
        return response.json({
          success: true,
          message: 'Stock deleted successfully',
        })
      } catch (error) {
        return response.status(404).json({
          success: false,
          message: 'Stock not found',
        })
      }
    }
  }