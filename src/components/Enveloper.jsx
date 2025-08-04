function Enveloper({ children }) {
  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        {children}
      </div>
    </div>
  );
}

export default Enveloper;