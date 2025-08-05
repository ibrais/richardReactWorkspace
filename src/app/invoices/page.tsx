export default function Page() {
    async function createInvoice(formData: FormData) {
        'use server'

        const rawFormData = {
            customerId: formData.get('customerId'),
            amount: formData.get('amount'),
            status: formData.get('status'),
        }
        // mutate data
        // revalidate the cache
    }

    return <form action={createInvoice}>

        <label>Enter the amount:
            <input type="text" name="amount" id="amount" />
        </label>
        <label>Enter the status:
            <input type="text" name="status" id="status" />
        </label>
        <button type="submit">Submit</button>
    </form>
}