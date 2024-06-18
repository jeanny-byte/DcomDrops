import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { NotificationsList } from "./notifications/NotificationsList";
import { NotificationsCreate } from "./notifications/NotificationsCreate";
import { NotificationsEdit } from "./notifications/NotificationsEdit";
import { NotificationsShow } from "./notifications/NotificationsShow";
import { AirdropsList } from "./airdrops/AirdropsList";
import { AirdropsCreate } from "./airdrops/AirdropsCreate";
import { AirdropsEdit } from "./airdrops/AirdropsEdit";
import { AirdropsShow } from "./airdrops/AirdropsShow";
import { CommentsList } from "./comments/CommentsList";
import { CommentsCreate } from "./comments/CommentsCreate";
import { CommentsEdit } from "./comments/CommentsEdit";
import { CommentsShow } from "./comments/CommentsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DcomDropsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Notifications"
          list={NotificationsList}
          edit={NotificationsEdit}
          create={NotificationsCreate}
          show={NotificationsShow}
        />
        <Resource
          name="Airdrops"
          list={AirdropsList}
          edit={AirdropsEdit}
          create={AirdropsCreate}
          show={AirdropsShow}
        />
        <Resource
          name="Comments"
          list={CommentsList}
          edit={CommentsEdit}
          create={CommentsCreate}
          show={CommentsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
