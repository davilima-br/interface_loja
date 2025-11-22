"use client";

export default function CartPage() {
    return (
        <div
            className="w-[90%] mx-auto py-[5%] space-y-[4%]"
            style={{ fontFamily: "Times New Roman, serif" }}
        >
            {/* Title */}
            <div className="space-y-2">
                <h1 className="text-center text-[250%] font-bold"
                    style={{ color: "#7A1515" }}
                >Cart</h1>
            </div>

            {/* Grid */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-[6%]">

                {/* LEFT SIDE */}
                <div className="col-span-2 w-full space-y-[4%]">

                    {/* HEADER ROW */}
                    <div className="hidden sm:grid grid-cols-3 w-full text-[95%] text-gray-600 pb-[1.5%] border-b">
                        <span>Product</span>
                        <span className="text-center">Quantity</span>
                        <span className="text-right pr-[5%]">Subtotal</span>
                    </div>

                    {/* ITEM 1 */}
                    <div className="w-full border-b py-[4%] flex flex-col sm:flex-row items-center gap-[4%]">

                        {/* Image */}
                        <img
                            src="/relogi1.png" alt="Relogio"
                            className="w-[35%] sm:w-[20%] rounded"
                        />

                        {/* INFO */}
                        <div className="w-full sm:w-[60%] space-y-1">
                            <h3 className="text-[130%] font-bold">Grand Seiko SBGJ251</h3>
                            <p className="text-gray-500">$6,500.00</p>
                        </div>

                        {/* Quantity */}
                        <div className="w-full sm:w-[20%] flex justify-center my-[2%]">
                            <div className="flex items-center gap-[20%]">
                                <button className="border px-4 py-2">-</button>
                                <span>1</span>
                                <button className="border px-4 py-2">+</button>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="w-full sm:w-[20%] text-right font-semibold text-[120%]">
                            $6,500.00
                        </div>
                    </div>

                    {/* ITEM 2 */}
                    <div className="w-full border-b py-[4%] flex flex-col sm:flex-row items-center gap-[4%]">
                        <img
                            src="relogio2.png" alt="Relogio"
                            className="w-[35%] sm:w-[20%] rounded"
                        />

                        <div className="w-full sm:w-[60%] space-y-1">
                            <h3 className="text-[130%] font-bold">Grand Seiko SBGA407G</h3>
                            <p className="text-gray-500">$4,800.00</p>
                        </div>

                        <div className="w-full sm:w-[20%] flex justify-center my-[2%]">
                            <div className="flex items-center gap-[20%]">
                                <button className="border px-4 py-2">-</button>
                                <span>1</span>
                                <button className="border px-4 py-2">+</button>
                            </div>
                        </div>

                        <div className="w-full sm:w-[20%] text-right font-semibold text-[120%]">
                            $4,800.00
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDE TOTAL */}
                <div className="w-full border p-[7%] rounded-lg shadow-sm space-y-[8%]">

                    <h2 className="text-[140%] font-bold"
                     style={{ color: "#7A1515" }}
                     >Cart Total</h2>

                    <div className="flex justify-between py-[3%] border-b text-gray-600">
                        <span>Subtotal</span>
                        <span>$11,300.00</span>
                    </div>

                    <div className="flex justify-between py-[3%] border-b font-bold">
                        <span>Total</span>
                        <span>$11,300.00</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-[5%] mt-[8%]">
                        <button className="w-[50%] border py-[3.5%] hover:bg-gray-100">
                            Update Cart
                        </button>
                        <button className="w-[50%] bg-black text-white py-[3.5%] hover:bg-gray-800">
                            Continue Shop
                        </button>
                    </div>

                    <button className="w-full bg-red-700 text-white py-[4.5%] hover:bg-red-800">
                        Proceed to checkout
                    </button>

                </div>

            </div>
        </div>
    );
}
