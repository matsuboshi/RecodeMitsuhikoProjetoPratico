import React, { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react';
import Loading from './Loading';
const InfoCard = lazy(() => import('../Components/InfoCard'));
import { ToastContainer, toast } from 'react-toastify';

export default function SplittedBodyContact() {
  const [items, setItems] = useState([]);
  const [render, setRender] = useState(false);
  const [msg, setMsg] = useState(false);
  const [emptyField, setEmptyField] = useState(true);
  const [loading, setloading] = useState(true);
  const [formData, setFormData] = useState({
    nome: '',
    msg: '',
  });

  useEffect(() => {
    console.log('Just opened page ---> CONTACT');

    let mounted = true;
    fetchItems().then(() => {
      if (mounted) {
        setloading(false);
        console.log('COMMENTS MOUNTED');
      }
    });

    return function cleanup() {
      mounted = false;
      console.log('COMMENTS UNMOUNTED');
    };
  }, [render]);

  const fetchItems = async () => {
    const url = 'http://localhost:3001/messages';
    const data = await fetch(url);
    const items = await data.json();
    setItems(items);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const json = JSON.stringify(formData);
    const url = 'http://localhost:3001/messages';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
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

  const handleChange = (event) => {
    // Checking if it's empty or not
    const nome = document.getElementById('nome').value;
    const msg = document.getElementById('msg').value;
    nome === '' || msg === '' ? setEmptyField(true) : setEmptyField(false);

    // Updating formData object
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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
    <main className="container flex-fill">
      <section className="row">
        <div className="col-lg-6 d-flex flex-column align-items-center my-4">
          <Suspense fallback={<Loading />}>
            <InfoCard
              info="+55 11 555-5555"
              fontAwesomeIcon="fab fa-whatsapp"
            />

            <InfoCard
              info="contato@fullstackeletro.com"
              fontAwesomeIcon="far fa-envelope"
            />
          </Suspense>

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
            {loading ? <p>Loading...</p> : <p>Fetched!!</p>}
            {!loading &&
              items.map((item) => (
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
