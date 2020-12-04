import React, { useState, useEffect } from 'react';
import Canvas from '../Components/Canvas';
import Header from '../Components/Header';
import InfoCard from '../Components/InfoCard';
import { ToastContainer, toast } from 'react-toastify';

export default function PageContact() {
  const [items, setItems] = useState([]);
  const [render, setRender] = useState(false);
  const [msg, setMsg] = useState(false);
  const [emptyField, setEmptyField] = useState(true);

  useEffect(() => {
    fetchItems();
  }, [render]);

  const fetchItems = async () => {
    const url =
      'http://projetopraticomitsuhikorecode/07%20-%20React_PHP_Boot/backend/getMsg.php';
    const data = await fetch(url);
    const items = await data.json();
    setItems(items);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData(event.target);
    const url =
      'http://projetopraticomitsuhikorecode/07%20-%20React_PHP_Boot/backend/postMsg.php';
    const options = {
      method: 'POST',
      body: formData,
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((dados) => {
        setRender(!render);
        setMsg(dados);
        document.getElementsByTagName('form')[0].reset();
        msgToast();

        setTimeout(() => {
          setMsg(false);
          setEmptyField(true);
        }, 2000);
      });
  };

  const handleChange = () => {
    const nome = document.getElementById('nome').value;
    const msg = document.getElementById('msg').value;
    nome === '' || msg === '' ? setEmptyField(true) : setEmptyField(false);
  };

  const msgToast = () =>
    toast.success('Mensagem enviada com sucesso!', {
      position: 'bottom-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const formatDate = (rawDate) => {
    const myDate = new Date(rawDate);
    const d = myDate.getDay();
    const mo = myDate.getMonth();
    // const y = myDate.getFullYear();
    const h = myDate.getHours();
    const mi = myDate.getMinutes();

    return `${d}/${mo} - ${h}:${mi}`;
  };

  return (
    <Canvas>
      <Header
        title="Fale Conosco"
        text="Entre em contato por um de nossos canais de comunicação, ou deixe seu feedback! "
      />

      <main className="container flex-fill">
        <section className="row">
          <div className="col-lg-6 d-flex flex-column align-items-center my-4">
            <InfoCard
              info="+55 11 555-5555"
              fontAwesomeIcon="fab fa-whatsapp"
            />

            <InfoCard
              info="contato@fullstackeletro.com"
              fontAwesomeIcon="far fa-envelope"
            />

            <form
              className="w-100 p-4 mt-4 rounded d-flex flex-column justify-content-center align-items-center shadow-lg"
              style={{ background: 'linear-gradient(90deg, #3D215B, #611e8a)' }}
              onSubmit={handleFormSubmit}
            >
              <div className="input-group mb-3">
                <div className="input-group-prepend w-25">
                  <span className="input-group-text text-white bg-success w-100 border-0">
                    Nome:
                  </span>
                </div>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="form-control"
                  style={styles.formInput}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend w-25">
                  <span className="input-group-text text-white bg-success w-100 border-0">
                    Mensagem:
                  </span>
                </div>
                <textarea
                  id="msg"
                  name="msg"
                  cols="30"
                  rows="10"
                  className="form-control"
                  style={styles.formInput}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="w-100">
                {emptyField ? (
                  <button
                    type="submit"
                    disabled
                    className=" btn btn-success btn-block"
                  >
                    Enviar
                  </button>
                ) : msg ? (
                  <button disabled className=" btn btn-success btn-block">
                    Mensagem enviada!!!
                  </button>
                ) : (
                  <button type="submit" className=" btn btn-success btn-block">
                    Enviar
                  </button>
                )}

                <button
                  type="reset"
                  value="Limpar"
                  className=" btn btn-outline-warning btn-block"
                >
                  Limpar
                </button>
              </div>

              {msg && (
                <div
                  className="alert alert-success position-absolute mx-auto mt-4 w-50 text-center"
                  role="alert"
                >
                  <span className="lead text-dark">
                    Mensagem enviada com sucesso!
                  </span>
                </div>
              )}

              <ToastContainer />
            </form>
          </div>

          <div className="my-4 col-lg-6 d-flex flex-column align-items-center">
            <div
              id="commentsDiv"
              className=" d-flex flex-column justify-content-start align-items-start text-white w-100 h-100 p-4 mb-0 rounded shadow-lg"
              style={{
                background: 'linear-gradient(90deg, #3D215B, #611e8a)',
              }}
            >
              {items.map((item) => (
                <div id="comment" key={`${item.id}`} style={styles.dialogBox}>
                  <p className="m-0 p-0">
                    <b className="text-success">
                      {' '}
                      {item.nome} [{formatDate(item.data)}] :
                    </b>
                    <br />
                    {item.msg}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Canvas>
  );
}

const styles = {
  dialogBox: {
    background: 'rgba(256, 256, 256, 0.15)',
    marginBottom: '10px',
    padding: '8px 16px',
    borderRadius: '8px',
  },
  formInput: {
    background: 'rgba(256, 256, 256, 0.15)',
    border: '0px solid',
    color: 'white',
    fontWeight: 'bold',
  },
};
