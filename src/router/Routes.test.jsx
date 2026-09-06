import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import { Provider } from "react-redux";
import { store } from "../app/store";



describe('routesTesting', ()=>{
    test('login-route', ()=>{
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={["/"]}>
                    <PublicRoutes />
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByTestId("login-page")).toBeInTheDocument();
    })
})