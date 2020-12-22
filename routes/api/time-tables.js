const path = require('path')
const appDir = path.dirname(require.main.filename)
const service = require(path.join(appDir, '/services')).timeTables
const forbiddenChecks = require(path.join(appDir, '/403s')).timeTables
const validate = require(path.join(appDir, '/400s')).timeTables
const resourceType = 'TIME_TABLES'

const router = require('express').Router()

/**
 * @swagger
 *
 * components:
 *   schemas:
 *     TimeTablePostPayload:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Akshay Kumar
 *         email:
 *           type: string
 *           example: akshay.kumar@poplink.in
 *         password:
 *           type: string
 *           example: asdasd
 *     TimeTablePostResponse:
 *       type: object
 *       properties:
 *         accessToken:
 *           type: string
 *         refreshToken:
 *           type: string
 *     TimeTableGetResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *     TimeTablePutPayload:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *     TimeTablePutResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 */

/**
 * @swagger
 * paths:
 *   /time-tables:
 *     get:
 *       tags:
 *       - Time Tables
 *       summary: Get all timeTableIds
 *       responses:
 *         200:
 *           description: successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: string
 *         400:
 *           description: bad request
 *         401:
 *           description: unauthorized
 *         403:
 *           description: forbidden
 *         500:
 *           description: internal server error
 *       security:
 *         - bearerAuth: []
 */

router.get('/', validate.getAll, forbiddenChecks.getAll, async (req, res) => {
  try {
    const ids = await service.getAll()
    res.json(ids)
  } catch (error) {
    console.log(`500::${resourceType}:GETALL-`, error)
    res.sendStatus(500)
  }
})

/**
 * @swagger
 * paths:
 *   /time-tables:
 *     post:
 *       tags:
 *       - Time Tables
 *       summary: Create timeTable
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TimeTablePostPayload'
 *       responses:
 *         200:
 *           description: successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/TimeTablePostResponse'
 *         400:
 *           description: bad request
 *         401:
 *           description: unauthorized
 *         403:
 *           description: forbidden
 *         500:
 *           description: internal server error
 */
router.post('/', validate.create, forbiddenChecks.create, async (req, res) => {
  try {
    const resource = await service.create(req.body)
    res.json(resource)
  } catch (error) {
    console.log(`500::${resourceType}:POST-`, error)
    res.sendStatus(500)
  }
})

/**
 * @swagger
 * paths:
 *   /time-tables/todays:
 *     get:
 *       tags:
 *       - Time Tables
 *       summary: Get timetable for today
 *       responses:
 *         200:
 *           description: successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/TimeTableGetResponse'
 *         400:
 *           description: bad request
 *         401:
 *           description: unauthorized
 *         403:
 *           description: forbidden
 *         500:
 *           description: internal server error
 *       security:
 *         - bearerAuth: []
 */

router.get('/todays', validate.getAll, forbiddenChecks.getAll, async (req, res) => {
  try {
    const ids = await service.getAll()
    res.json(ids)
  } catch (error) {
    console.log(`500::${resourceType}:GETALL-`, error)
    res.sendStatus(500)
  }
})

/**
 * @swagger
 * paths:
 *   /time-tables/tomorrows:
 *     get:
 *       tags:
 *       - Time Tables
 *       summary: Get timetable for tomorrow
 *       responses:
 *         200:
 *           description: successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/TimeTableGetResponse'
 *         400:
 *           description: bad request
 *         401:
 *           description: unauthorized
 *         403:
 *           description: forbidden
 *         500:
 *           description: internal server error
 *       security:
 *         - bearerAuth: []
 */

router.get('/tomorrows', validate.getAll, forbiddenChecks.getAll, async (req, res) => {
  try {
    const ids = await service.getAll()
    res.json(ids)
  } catch (error) {
    console.log(`500::${resourceType}:GETALL-`, error)
    res.sendStatus(500)
  }
})

/**
 * @swagger
 * paths:
 *   /time-tables/yesterdays:
 *     get:
 *       tags:
 *       - Time Tables
 *       summary: Get timetable for yesterday
 *       responses:
 *         200:
 *           description: successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/TimeTableGetResponse'
 *         400:
 *           description: bad request
 *         401:
 *           description: unauthorized
 *         403:
 *           description: forbidden
 *         500:
 *           description: internal server error
 *       security:
 *         - bearerAuth: []
 */

router.get('/yesterdays', validate.getAll, forbiddenChecks.getAll, async (req, res) => {
  try {
    const ids = await service.getAll()
    res.json(ids)
  } catch (error) {
    console.log(`500::${resourceType}:GETALL-`, error)
    res.sendStatus(500)
  }
})

/**
 * @swagger
 * paths:
 *   /time-tables/day-afters:
 *     get:
 *       tags:
 *       - Time Tables
 *       summary: Get timetable for day after
 *       responses:
 *         200:
 *           description: successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/TimeTableGetResponse'
 *         400:
 *           description: bad request
 *         401:
 *           description: unauthorized
 *         403:
 *           description: forbidden
 *         500:
 *           description: internal server error
 *       security:
 *         - bearerAuth: []
 */

router.get('/day-afters', validate.getAll, forbiddenChecks.getAll, async (req, res) => {
  try {
    const ids = await service.getAll()
    res.json(ids)
  } catch (error) {
    console.log(`500::${resourceType}:GETALL-`, error)
    res.sendStatus(500)
  }
})

/**
 * @swagger
 * paths:
 *   /time-tables/{timeTableId}:
 *     get:
 *       tags:
 *       - Time Tables
 *       summary: Get timeTable by ID
 *       parameters:
 *         - in: path
 *           name: timeTableId
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/TimeTableGetResponse'
 *         400:
 *           description: bad request
 *         401:
 *           description: unauthorized
 *         403:
 *           description: forbidden
 *         500:
 *           description: internal server error
 *       security:
 *         - bearerAuth: []
 */
router.get('/:id', validate.get, forbiddenChecks.get, async (req, res) => {
  try {
    const { id } = req.params
    const resource = await service.get(id)
    res.json(resource)
  } catch (error) {
    console.log(`500::${resourceType}:GET-`, error)
    res.sendStatus(500)
  }
})

/**
 * @swagger
 * paths:
 *   /time-tables/{timeTableId}:
 *     put:
 *       tags:
 *       - Time Tables
 *       summary: Update timeTable by ID and payload
 *       parameters:
 *         - in: path
 *           name: timeTableId
 *           required: true
 *           schema:
 *             type: string
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TimeTablePutPayload'
 *       responses:
 *         200:
 *           description: successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/TimeTablePutResponse'
 *         400:
 *           description: bad request
 *         401:
 *           description: unauthorized
 *         403:
 *           description: forbidden
 *         500:
 *           description: internal server error
 *       security:
 *         - bearerAuth: []
 */
router.put('/:id', validate.update, forbiddenChecks.update, async (req, res) => {
  try {
    const { id } = req.params
    const payload = req.body
    const resource = await service.update(id, payload)
    res.json(resource)
  } catch (error) {
    console.log(`500::${resourceType}:PUT-`, error)
    res.sendStatus(500)
  }
})

/**
 * @swagger
 * paths:
 *   /time-tables/{timeTableId}:
 *     delete:
 *       tags:
 *       - Time Tables
 *       summary: Delete timeTable by ID
 *       parameters:
 *         - in: path
 *           name: timeTableId
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: successful operation
 *         400:
 *           description: bad request
 *         401:
 *           description: unauthorized
 *         403:
 *           description: forbidden
 *         500:
 *           description: internal server error
 *       security:
 *         - bearerAuth: []
 */
router.delete('/:id', validate.terminate, forbiddenChecks.terminate, async (req, res) => {
  try {
    const { id } = req.params
    await service.terminate(id)
    res.sendStatus(200)
  } catch (error) {
    console.log(`500::${resourceType}:DELETE-`, error)
    res.sendStatus(500)
  }
})

module.exports = router
