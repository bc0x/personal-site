import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'


export default createRoute((c) => {
  const name = c.req.query('name') ?? 'bcox'
  return c.render(
    <div>
      <h1>Hello, {name}!</h1>
      <button className="btn">Button</button>
      <Counter />
    </div>,
    { title: name }
  )
})
