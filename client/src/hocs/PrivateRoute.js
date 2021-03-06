import React from "react";
import { graphql } from "react-apollo";
import _ from "lodash";
import { withRouter } from "react-router";

import { verifyToken } from "../queries";

export const withAuth = ProtectedRoute => {
   class PrivateRoute extends React.Component {
      async componentWillMount() {
         try {
            const token = JSON.parse(window.localStorage.getItem("token")).token;
            const auth = await this.props.authorization({
               variables: {
                  token: token
               }
            });
            return auth;
         } catch (error) {
            window.localStorage.removeItem('token');
            return this.props.history.push("/login");
         }
      }
      render() {
         return <ProtectedRoute {...this.props} />;
      }
   }
   return _.flowRight(
      graphql(verifyToken, {
         name: "authorization"
      })
   )(withRouter(PrivateRoute));
};
