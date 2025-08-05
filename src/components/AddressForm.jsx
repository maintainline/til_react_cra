import useInput from "../hooks/useInput";

function AddressForm() {
  const address = useInput();
  const handleSubimt = () => {
    alert(address.value);
    address.reset();
  };
  return (
    <div>
      <h2>AddressForm</h2>
      <input type="text" placeholder="주소를 입력하세요." {...address} />
      <button onClick={handleSubimt}>확인</button>
    </div>
  );
}

export default AddressForm;
