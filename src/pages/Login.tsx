import React from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps, useHistory } from 'react-router';

const LoginPage: React.FC = () => {
  const history = useHistory();

  const login = (data: any) => {
    history.replace('/tabs');
  }

  return (
    <IonPage id="login-page">
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" color="primary" className="ion-margin-top" onClick={
          login
        }>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
