'use client';

import { Persons } from '@gravity-ui/icons';
import { AlertDialog, Button, toast } from '@heroui/react';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const DeleteModal = ({ existingData }) => {
  const router = useRouter();

  const handleDelete = async _id => {
    const req = await fetch(`http://localhost:8000/featured/${_id}`, {
      method: 'DELETE',
    });

    const res = await req.json();

    console.log(res);

    if (res.deletedCount > 0) {
      toast.success('Destination deleted successfully', {
        description: `${existingData?.destinationName} has been removed permanently.`,

        actionProps: {
          children: 'Close',
          onPress: () => toast.clear(),
          variant: 'flat',
        },

        variant: 'solid',
      });

      router.push('/destinations');
    }
  };

  return (
    <AlertDialog>
      <Button
        variant="outline"
        className="cursor-pointer flex items-center px-6 py-2 border border-red-200 text-red-500 rounded-md hover:bg-red-50 transition"
      >
        <Trash2 size={16} className="mr-2" />
        Trash
      </Button>

      <AlertDialog.Backdrop className="bg-black/50 backdrop-blur-sm">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="w-full max-w-md rounded-2xl border border-red-200 bg-white p-6 shadow-2xl">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-red-100 p-4">
                <Trash2 className="text-red-500" size={32} />
              </div>

              <AlertDialog.Heading className="text-2xl font-bold text-gray-800">
                Delete Destination?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body className="mt-4 text-center text-gray-600">
              <p>
                Are you sure you want to delete{' '}
                <span className="font-semibold text-black">
                  {existingData?.destinationName}
                </span>
                ?
              </p>

              <p className="mt-2 text-sm text-red-500">
                This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="mt-6 flex gap-3">
              <Button
                slot="close"
                variant="bordered"
                className="w-full border border-[#ddd]"
              >
                Cancel
              </Button>

              <Button
                onClick={() => handleDelete(existingData._id)}
                slot="close"
                color="danger"
                className="w-full bg-red-500"
              >
                Yes, Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteModal;
