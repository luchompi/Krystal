import CardLayout from "../../layouts/CardLayout";
import SendMail from "../../assets/json/SendMail.json";
const ProfileCreated = () => {
  return (
    <div>
      <CardLayout
        header={"¡Perfil creado!"}
        title={"Su perfil ha sido creado correctamente"}
        text={"Verifique su correo y siga las instrucciones para usarlo."}
        icon={SendMail}
      />
    </div>
  );
};

export default ProfileCreated;
