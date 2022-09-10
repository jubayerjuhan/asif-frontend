import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { closeMaxProductModal, toogleSideBar } from "./store/actions";
import MainLayout from "./Layouts/MainLayout";
import * as Maincontainers from "./views";
import "./App.css";
import Orders from "./components/Orders/Orders.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout
          storeCartCount={this.props.storeCartItemsCount}
          showModal={this.props.showModalProp}
          closeModalProp={this.props.closeModalProp}
          modalMessage={this.props.modalMessageProp}
          showSideBar={this.props.showSideNavigationProp}
          toggleSideBar={this.props.toggleSideBarProp}
        >
          <switch>
            <Route
              path={"/DashboardPage"}
              exact
              component={Maincontainers.DashboardPage}
            />

            <Route path={"/login"} exact component={Maincontainers.LoginPage} />

            <Route path={"/"} exact component={Maincontainers.HomePage} />
            <Route path={"/all"} exact component={Maincontainers.AllPage} />
            <Route
              path={"/category/:category"}
              component={Maincontainers.ProductCategoriesPage}
            />

            <Route path={"/sale"} component={Maincontainers.SalesPage} />
            <Route path={"/cart"} component={Maincontainers.CartPage} />
            <Route path={"/orders"} component={Maincontainers.OrdersPage} />
            <Route path={"/checkout"} component={Maincontainers.CheckoutPage} />
            <Route
              path={"/product/:productSlug"}
              render={(props) => (
                <Maincontainers.ProductDetailsPage
                  key={props.match.params.productSlug}
                  {...props}
                />
              )}
            />
            {/*always redirect to index*/}
            <Redirect to={"/"} />
          </switch>
        </MainLayout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    storeCartItemsCount: state.cartTotal,
    showModalProp: state.productMaxShowModal,
    modalMessageProp: state.modalMessage,
    showSideNavigationProp: state.showSideNavigation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModalProp: () => dispatch(closeMaxProductModal()),
    toggleSideBarProp: () => dispatch(toogleSideBar()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
