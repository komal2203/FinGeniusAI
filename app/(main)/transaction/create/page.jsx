import { getUserAccount } from "@/actions/dashboard";
import { defaultCategories } from "@/data/categories";
import { AddTransactionForm } from "../_components/transaction-form";
import { getTransaction } from "@/actions/transaction";

export default async function AddTransactionPage({ searchParams }) {
    const accounts = await getUserAccount();
    const editId = searchParams?.edit;

    let initialData = null;
    if (editId) {
        const transaction = await getTransaction(editId);
        initialData = transaction;
    }

    return (
        <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl">
            <div className="flex justify-center md:justify-normal mb-8">
                <h1 className="text-5xl gradient-title ">{editId ? "Edit" : "Add"} Transaction</h1>
            </div>
            <AddTransactionForm
                accounts={accounts}
                categories={defaultCategories}
                editMode={!!editId}
                initialData={initialData}
            />
        </div >
    );
}