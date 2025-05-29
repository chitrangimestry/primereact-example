import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

export default function DialogComponent() {
  const [visible, setVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  let footer = (
    <div>
      <Button
        label="Close"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
      />
    </div>
  );
  return (
    <>
      <div className="flex flex-row mt-4 gap-2">
        <Button label="Show Modal" onClick={() => setVisible(true)} />
        <Dialog
          visible={visible}
          onHide={() => setVisible(false)}
          header="Dialog Header"
          draggable={false}
          footer={footer}
          dismissableMask={true}
          className="w-[50rem]"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab quia,
            in voluptatibus delectus ipsa, nam pariatur mollitia id eos dolores
            facilis non rem optio. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Deleniti minus tenetur, ipsum iusto doloremque
            suscipit provident illum velit magni labore reiciendis nihil
            necessitatibus amet beatae rem dolorem excepturi libero. Sapiente,
            adipisci itaque molestiae illo delectus deserunt consectetur in,
            labore neque alias exercitationem accusantium minus, esse tempora
            obcaecati? Nemo, et facilis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequatur eligendi hic vel molestiae, asperiores
            debitis. Soluta ullam commodi, recusandae reprehenderit molestias
            temporibus voluptates quibusdam error ex ipsam dicta, porro
            praesentium suscipit deserunt, est harum blanditiis officia eveniet
            distinctio itaque obcaecati mollitia vel deleniti hic. Est, amet
            laborum. Expedita, voluptatum reprehenderit? Hic eligendi accusamus
            asperiores, consectetur repudiandae dolore deserunt architecto ad
            qui possimus doloremque at impedit? Delectus magni numquam
            voluptatem quam ducimus, quisquam at officia totam id natus enim
            repellat iste perspiciatis deleniti repudiandae a maxime. Ad atque
            laudantium exercitationem dignissimos veniam recusandae eum ea
            aliquam, assumenda deleniti. Assumenda, voluptatem vero! 
          </p>
        </Dialog>

        <Button label="Show Right" onClick={() => setRightVisible(true)} />
        <Dialog
          visible={rightVisible}
          onHide={() => setRightVisible(false)}
          header="Right Dialog"
          position="right"
          className="w-[50rem]"
          dismissableMask
          draggable={false}
          footer={footer}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab quia,
            in voluptatibus delectus ipsa, nam pariatur mollitia id eos dolores
            facilis non rem optio.
          </p>
        </Dialog>
      </div>
    </>
  );
}
