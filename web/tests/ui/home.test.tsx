import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Home from "@/app/page"

test("Home", () => {
  render(<Home />)

  const element = screen.getByText("Hello, World!")
  expect(element).toBeInTheDocument()
})
